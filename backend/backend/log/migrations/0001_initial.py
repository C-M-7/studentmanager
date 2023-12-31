# Generated by Django 4.2.6 on 2023-10-15 15:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Log',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sid', models.IntegerField(null=True)),
                ('step', models.IntegerField(null=True)),
                ('name', models.CharField(max_length=100, null=True)),
                ('gender', models.CharField(choices=[('male', 'Male'), ('female', 'Female'), ('other', 'Other')], null=True)),
                ('city', models.CharField(choices=[('chandigarh', 'Chandigarh'), ('panchkula', 'Panchkula'), ('mohali', 'Mohali'), ('other', 'Other')], null=True)),
                ('pincode', models.IntegerField(null=True)),
                ('degree', models.CharField(choices=[('Btech', 'Btech'), ('Mtech', 'Mtech'), ('Phd', 'Phd')], null=True)),
                ('branch', models.CharField(choices=[('CSE', 'Cse'), ('ECE', 'Ece'), ('EE', 'Ee'), ('MECH', 'Mech')], null=True)),
                ('batch', models.IntegerField(choices=[(2021, 'One'), (2022, 'Two'), (2023, 'Three'), (2024, 'Four'), (2025, 'Five')], null=True)),
                ('email', models.EmailField(max_length=254, null=True)),
                ('quota', models.CharField(choices=[('General', 'Gen'), ('SC', 'Sc'), ('ST', 'St'), ('OBC', 'Obc')], null=True)),
                ('updatetime', models.DateTimeField(null=True)),
                ('cgpa', models.FloatField(null=True)),
                ('sgpa', models.FloatField(null=True)),
                ('hostel', models.CharField(choices=[('Kurukshetra', 'Kuk'), ('VIndhya', 'Vin'), ('Himalaya', 'Him'), ('Kalpana', 'Kal')], null=True)),
                ('prof', models.CharField(choices=[('Cultural', 'Cult'), ('Technical', 'Tech'), ('Sports', 'Sport')], null=True)),
                ('scholar', models.CharField(choices=[('none', 'Non'), ('Academic', 'Ac'), ('Sports', 'Sp'), ('PWD', 'Pwd')], null=True)),
            ],
        ),
    ]
