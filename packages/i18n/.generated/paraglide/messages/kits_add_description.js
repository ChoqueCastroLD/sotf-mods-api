/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Add_DescriptionInputs */

const en_kits_add_description = /** @type {(inputs: Kits_Add_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pick a kit, or start a new one with this mod.`)
};

const es_kits_add_description = /** @type {(inputs: Kits_Add_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige un kit o empieza uno nuevo con este mod.`)
};

const de_kits_add_description = /** @type {(inputs: Kits_Add_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wähle ein Kit oder starte ein neues mit diesem Mod.`)
};

const fr_kits_add_description = /** @type {(inputs: Kits_Add_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez un kit ou créez-en un nouveau avec ce mod.`)
};

const it_kits_add_description = /** @type {(inputs: Kits_Add_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli un kit o creane uno nuovo con questa mod.`)
};

const nl_kits_add_description = /** @type {(inputs: Kits_Add_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies een kit of begin een nieuwe met deze mod.`)
};

const pl_kits_add_description = /** @type {(inputs: Kits_Add_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz zestaw albo zacznij nowy od tego moda.`)
};

const pt_kits_add_description = /** @type {(inputs: Kits_Add_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha um kit ou comece um novo com este mod.`)
};

const ru_kits_add_description = /** @type {(inputs: Kits_Add_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите набор или создайте новый с этим модом.`)
};

const sv_kits_add_description = /** @type {(inputs: Kits_Add_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj ett kit eller starta ett nytt med den här modden.`)
};

const tr_kits_add_description = /** @type {(inputs: Kits_Add_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir kit seç ya da bu modla yeni bir kit başlat.`)
};

const zh_kits_add_description = /** @type {(inputs: Kits_Add_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择一个套装，或用这个模组新建一个。`)
};

const ja_kits_add_description = /** @type {(inputs: Kits_Add_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットを選ぶか、この MOD で新しいキットを作りましょう。`)
};

/**
* | output |
* | --- |
* | "Pick a kit, or start a new one with this mod." |
*
* @param {Kits_Add_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_add_description = /** @type {((inputs?: Kits_Add_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Add_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_add_description(inputs)
	if (locale === "de") return de_kits_add_description(inputs)
	if (locale === "fr") return fr_kits_add_description(inputs)
	if (locale === "it") return it_kits_add_description(inputs)
	if (locale === "nl") return nl_kits_add_description(inputs)
	if (locale === "pl") return pl_kits_add_description(inputs)
	if (locale === "pt") return pt_kits_add_description(inputs)
	if (locale === "ru") return ru_kits_add_description(inputs)
	if (locale === "sv") return sv_kits_add_description(inputs)
	if (locale === "tr") return tr_kits_add_description(inputs)
	if (locale === "zh") return zh_kits_add_description(inputs)
	if (locale === "ja") return ja_kits_add_description(inputs)
	return en_kits_add_description(inputs)
});
