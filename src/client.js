import { createClient } from '@supabase/supabase-js'
const URL = "https://rfyeuuzfnglfchvbmnbr.supabase.co";
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmeWV1dXpmbmdsZmNodmJtbmJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NTYxMDIsImV4cCI6MTk5NjIzMjEwMn0.x2O0HpcXrnWzTHF9THyvkKjfKbgUhS_SZW13QeW_j4c';
export const supabase = createClient(URL, API_KEY);

