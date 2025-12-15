/*
  # Create Promoven One Initial Schema

  1. New Tables
    - `user_profiles` - Store user profile information beyond auth
      - `id` (uuid, primary key, references auth.users)
      - `email` (text, user email)
      - `full_name` (text, user name)
      - `company_name` (text, MEI company name)
      - `cnpj` (text, business registration number)
      - `phone` (text, contact phone)
      - `avatar_url` (text, profile picture)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `invoices` - Track issued invoices
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `invoice_number` (text, unique invoice identifier)
      - `client_name` (text)
      - `service_description` (text)
      - `amount` (numeric)
      - `status` (text: 'draft', 'issued', 'paid', 'overdue')
      - `due_date` (date)
      - `issued_date` (date)
      - `paid_date` (date, nullable)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `financial_records` - Track financial transactions
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `type` (text: 'income', 'expense')
      - `category` (text)
      - `description` (text)
      - `amount` (numeric)
      - `transaction_date` (date)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage only their own data
    - Add policies for public registration (for signup)
*/

-- Create user_profiles table
CREATE TABLE IF NOT EXISTS user_profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text UNIQUE NOT NULL,
  full_name text,
  company_name text,
  cnpj text UNIQUE,
  phone text,
  avatar_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create invoices table
CREATE TABLE IF NOT EXISTS invoices (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  invoice_number text NOT NULL,
  client_name text NOT NULL,
  service_description text,
  amount numeric(12,2) NOT NULL,
  status text DEFAULT 'draft' CHECK (status IN ('draft', 'issued', 'paid', 'overdue')),
  due_date date,
  issued_date date DEFAULT CURRENT_DATE,
  paid_date date,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id, invoice_number)
);

-- Create financial_records table
CREATE TABLE IF NOT EXISTS financial_records (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  type text NOT NULL CHECK (type IN ('income', 'expense')),
  category text NOT NULL,
  description text,
  amount numeric(12,2) NOT NULL,
  transaction_date date DEFAULT CURRENT_DATE,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE financial_records ENABLE ROW LEVEL SECURITY;

-- RLS Policies for user_profiles
CREATE POLICY "Users can view own profile"
  ON user_profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON user_profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON user_profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- RLS Policies for invoices
CREATE POLICY "Users can view own invoices"
  ON invoices FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create invoices"
  ON invoices FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own invoices"
  ON invoices FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own invoices"
  ON invoices FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- RLS Policies for financial_records
CREATE POLICY "Users can view own records"
  ON financial_records FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create records"
  ON financial_records FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own records"
  ON financial_records FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own records"
  ON financial_records FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_invoices_user_id ON invoices(user_id);
CREATE INDEX IF NOT EXISTS idx_invoices_status ON invoices(status);
CREATE INDEX IF NOT EXISTS idx_financial_records_user_id ON financial_records(user_id);
CREATE INDEX IF NOT EXISTS idx_financial_records_type ON financial_records(type);
