/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Category_Intro_CompanionsInputs */

const en_explore_category_intro_companions = /** @type {(inputs: Explore_Category_Intro_CompanionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kelvin, Virginia and other allies: smarter commands, new behaviours and more ways to travel together.`)
};

const es_explore_category_intro_companions = /** @type {(inputs: Explore_Category_Intro_CompanionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kelvin, Virginia y otros aliados: órdenes más listas, comportamientos nuevos y más formas de viajar juntos.`)
};

const de_explore_category_intro_companions = /** @type {(inputs: Explore_Category_Intro_CompanionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kelvin, Virginia und andere Verbündete: klügere Befehle, neues Verhalten und mehr gemeinsame Wege.`)
};

const fr_explore_category_intro_companions = /** @type {(inputs: Explore_Category_Intro_CompanionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kelvin, Virginia et d’autres alliés : ordres plus malins, nouveaux comportements et plus de façons de voyager ensemble.`)
};

const it_explore_category_intro_companions = /** @type {(inputs: Explore_Category_Intro_CompanionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kelvin, Virginia e altri alleati: comandi più intelligenti, nuovi comportamenti e più modi di viaggiare insieme.`)
};

const nl_explore_category_intro_companions = /** @type {(inputs: Explore_Category_Intro_CompanionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kelvin, Virginia en andere bondgenoten: slimmere commando’s, nieuw gedrag en meer manieren om samen te reizen.`)
};

const pl_explore_category_intro_companions = /** @type {(inputs: Explore_Category_Intro_CompanionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kelvin, Virginia i inni sojusznicy: sprytniejsze polecenia, nowe zachowania i więcej sposobów na wspólną podróż.`)
};

const pt_explore_category_intro_companions = /** @type {(inputs: Explore_Category_Intro_CompanionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kelvin, Virginia e outros aliados: comandos mais espertos, novos comportamentos e mais formas de viajar juntos.`)
};

const ru_explore_category_intro_companions = /** @type {(inputs: Explore_Category_Intro_CompanionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Кельвин, Вирджиния и другие союзники: умные команды, новое поведение и больше способов путешествовать вместе.`)
};

const sv_explore_category_intro_companions = /** @type {(inputs: Explore_Category_Intro_CompanionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kelvin, Virginia och andra allierade: smartare kommandon, nya beteenden och fler sätt att resa tillsammans.`)
};

const tr_explore_category_intro_companions = /** @type {(inputs: Explore_Category_Intro_CompanionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kelvin, Virginia ve diğer müttefikler: daha akıllı komutlar, yeni davranışlar ve birlikte yolculuğun yeni yolları.`)
};

const zh_explore_category_intro_companions = /** @type {(inputs: Explore_Category_Intro_CompanionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kelvin、Virginia 等同伴：更聪明的指令、新的行为和更多同行方式。`)
};

const ja_explore_category_intro_companions = /** @type {(inputs: Explore_Category_Intro_CompanionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ケルビン、バージニアなどの仲間に、賢い指示、新しい行動、一緒に旅する方法を追加。`)
};

/**
* | output |
* | --- |
* | "Kelvin, Virginia and other allies: smarter commands, new behaviours and more ways to travel together." |
*
* @param {Explore_Category_Intro_CompanionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_category_intro_companions = /** @type {((inputs?: Explore_Category_Intro_CompanionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Category_Intro_CompanionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_category_intro_companions(inputs)
	if (locale === "de") return de_explore_category_intro_companions(inputs)
	if (locale === "fr") return fr_explore_category_intro_companions(inputs)
	if (locale === "it") return it_explore_category_intro_companions(inputs)
	if (locale === "nl") return nl_explore_category_intro_companions(inputs)
	if (locale === "pl") return pl_explore_category_intro_companions(inputs)
	if (locale === "pt") return pt_explore_category_intro_companions(inputs)
	if (locale === "ru") return ru_explore_category_intro_companions(inputs)
	if (locale === "sv") return sv_explore_category_intro_companions(inputs)
	if (locale === "tr") return tr_explore_category_intro_companions(inputs)
	if (locale === "zh") return zh_explore_category_intro_companions(inputs)
	if (locale === "ja") return ja_explore_category_intro_companions(inputs)
	return en_explore_category_intro_companions(inputs)
});
