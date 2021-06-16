<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLibraryRuleSetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('library_rule_sets', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->bigInteger('num_of_books_per_user')->unsigned();
            $table->bigInteger('duration_per_borrow')->unsigned();
            $table->float('cost_per_day_late_return')->unsigned();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('library_rule_sets');
    }
}
