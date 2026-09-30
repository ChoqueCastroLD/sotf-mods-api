/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Visibility_Public_HintInputs */

const en_kits_visibility_public_hint = /** @type {(inputs: Kits_Visibility_Public_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listed on Kits and in search.`)
};

const es_kits_visibility_public_hint = /** @type {(inputs: Kits_Visibility_Public_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aparece en Kits y en la búsqueda.`)
};

const de_kits_visibility_public_hint = /** @type {(inputs: Kits_Visibility_Public_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erscheint unter Kits und in der Suche.`)
};

const fr_kits_visibility_public_hint = /** @type {(inputs: Kits_Visibility_Public_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visible dans Kits et dans la recherche.`)
};

const it_kits_visibility_public_hint = /** @type {(inputs: Kits_Visibility_Public_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compare in Kit e nella ricerca.`)
};

const nl_kits_visibility_public_hint = /** @type {(inputs: Kits_Visibility_Public_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zichtbaar bij Kits en in zoekresultaten.`)
};

const pl_kits_visibility_public_hint = /** @type {(inputs: Kits_Visibility_Public_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Widoczny w Zestawach i w wyszukiwarce.`)
};

const pt_kits_visibility_public_hint = /** @type {(inputs: Kits_Visibility_Public_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aparece em Kits e na busca.`)
};

const ru_kits_visibility_public_hint = /** @type {(inputs: Kits_Visibility_Public_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Виден в разделе «Наборы» и в поиске.`)
};

const sv_kits_visibility_public_hint = /** @type {(inputs: Kits_Visibility_Public_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Syns under Kit och i sökningen.`)
};

const tr_kits_visibility_public_hint = /** @type {(inputs: Kits_Visibility_Public_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kitler’de ve aramada görünür.`)
};

const zh_kits_visibility_public_hint = /** @type {(inputs: Kits_Visibility_Public_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示在套装列表和搜索结果中。`)
};

const ja_kits_visibility_public_hint = /** @type {(inputs: Kits_Visibility_Public_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キット一覧と検索に表示されます。`)
};

/**
* | output |
* | --- |
* | "Listed on Kits and in search." |
*
* @param {Kits_Visibility_Public_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_visibility_public_hint = /** @type {((inputs?: Kits_Visibility_Public_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Visibility_Public_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_visibility_public_hint(inputs)
	if (locale === "de") return de_kits_visibility_public_hint(inputs)
	if (locale === "fr") return fr_kits_visibility_public_hint(inputs)
	if (locale === "it") return it_kits_visibility_public_hint(inputs)
	if (locale === "nl") return nl_kits_visibility_public_hint(inputs)
	if (locale === "pl") return pl_kits_visibility_public_hint(inputs)
	if (locale === "pt") return pt_kits_visibility_public_hint(inputs)
	if (locale === "ru") return ru_kits_visibility_public_hint(inputs)
	if (locale === "sv") return sv_kits_visibility_public_hint(inputs)
	if (locale === "tr") return tr_kits_visibility_public_hint(inputs)
	if (locale === "zh") return zh_kits_visibility_public_hint(inputs)
	if (locale === "ja") return ja_kits_visibility_public_hint(inputs)
	return en_kits_visibility_public_hint(inputs)
});
