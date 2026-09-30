/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Category_Intro_Quality_Of_LifeInputs */

const en_explore_category_intro_quality_of_life = /** @type {(inputs: Explore_Category_Intro_Quality_Of_LifeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Small fixes and conveniences that smooth out everyday survival: bigger stacks, faster crafting, cleaner menus and fewer chores.`)
};

const es_explore_category_intro_quality_of_life = /** @type {(inputs: Explore_Category_Intro_Quality_Of_LifeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arreglos y comodidades que hacen más llevadera la supervivencia diaria: pilas más grandes, fabricación más rápida, menús más limpios y menos tareas.`)
};

const de_explore_category_intro_quality_of_life = /** @type {(inputs: Explore_Category_Intro_Quality_Of_LifeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kleine Verbesserungen und Komfortfunktionen für den Überlebensalltag: größere Stapel, schnelleres Craften, aufgeräumte Menüs, weniger Routine.`)
};

const fr_explore_category_intro_quality_of_life = /** @type {(inputs: Explore_Category_Intro_Quality_Of_LifeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Petites corrections et commodités qui facilitent la survie au quotidien : piles plus grandes, artisanat plus rapide, menus plus clairs, moins de corvées.`)
};

const it_explore_category_intro_quality_of_life = /** @type {(inputs: Explore_Category_Intro_Quality_Of_LifeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Piccole correzioni e comodità che semplificano la sopravvivenza di ogni giorno: pile più grandi, crafting più rapido, menu più puliti, meno fatiche.`)
};

const nl_explore_category_intro_quality_of_life = /** @type {(inputs: Explore_Category_Intro_Quality_Of_LifeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kleine verbeteringen en gemakken die het dagelijkse overleven soepeler maken: grotere stapels, sneller craften, overzichtelijkere menu’s en minder klusjes.`)
};

const pl_explore_category_intro_quality_of_life = /** @type {(inputs: Explore_Category_Intro_Quality_Of_LifeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drobne poprawki i udogodnienia, które ułatwiają codzienne przetrwanie: większe stosy, szybsze wytwarzanie, czytelniejsze menu i mniej obowiązków.`)
};

const pt_explore_category_intro_quality_of_life = /** @type {(inputs: Explore_Category_Intro_Quality_Of_LifeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pequenas correções e facilidades que deixam a sobrevivência do dia a dia mais tranquila: pilhas maiores, criação mais rápida, menus mais limpos e menos tarefas.`)
};

const ru_explore_category_intro_quality_of_life = /** @type {(inputs: Explore_Category_Intro_Quality_Of_LifeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Небольшие исправления и удобства, которые облегчают повседневное выживание: большие стопки, быстрый крафт, понятные меню и меньше рутины.`)
};

const sv_explore_category_intro_quality_of_life = /** @type {(inputs: Explore_Category_Intro_Quality_Of_LifeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Små fixar och bekvämligheter som gör vardagsöverlevnaden smidigare: större staplar, snabbare tillverkning, renare menyer och färre sysslor.`)
};

const tr_explore_category_intro_quality_of_life = /** @type {(inputs: Explore_Category_Intro_Quality_Of_LifeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Günlük hayatta kalmayı kolaylaştıran küçük düzeltmeler ve kolaylıklar: daha büyük yığınlar, daha hızlı üretim, sade menüler ve daha az angarya.`)
};

const zh_explore_category_intro_quality_of_life = /** @type {(inputs: Explore_Category_Intro_Quality_Of_LifeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`让日常生存更顺畅的小修复与便利功能：更大的堆叠、更快的制作、更清爽的菜单和更少的琐事。`)
};

const ja_explore_category_intro_quality_of_life = /** @type {(inputs: Explore_Category_Intro_Quality_Of_LifeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日々のサバイバルを快適にする小さな修正や便利機能。スタック拡張、クラフト高速化、見やすいメニュー、面倒な作業の削減など。`)
};

/**
* | output |
* | --- |
* | "Small fixes and conveniences that smooth out everyday survival: bigger stacks, faster crafting, cleaner menus and fewer chores." |
*
* @param {Explore_Category_Intro_Quality_Of_LifeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_category_intro_quality_of_life = /** @type {((inputs?: Explore_Category_Intro_Quality_Of_LifeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Category_Intro_Quality_Of_LifeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_category_intro_quality_of_life(inputs)
	if (locale === "de") return de_explore_category_intro_quality_of_life(inputs)
	if (locale === "fr") return fr_explore_category_intro_quality_of_life(inputs)
	if (locale === "it") return it_explore_category_intro_quality_of_life(inputs)
	if (locale === "nl") return nl_explore_category_intro_quality_of_life(inputs)
	if (locale === "pl") return pl_explore_category_intro_quality_of_life(inputs)
	if (locale === "pt") return pt_explore_category_intro_quality_of_life(inputs)
	if (locale === "ru") return ru_explore_category_intro_quality_of_life(inputs)
	if (locale === "sv") return sv_explore_category_intro_quality_of_life(inputs)
	if (locale === "tr") return tr_explore_category_intro_quality_of_life(inputs)
	if (locale === "zh") return zh_explore_category_intro_quality_of_life(inputs)
	if (locale === "ja") return ja_explore_category_intro_quality_of_life(inputs)
	return en_explore_category_intro_quality_of_life(inputs)
});
