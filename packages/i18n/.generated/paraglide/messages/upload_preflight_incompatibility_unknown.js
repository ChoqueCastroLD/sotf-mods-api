/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_Incompatibility_UnknownInputs */

const en_upload_preflight_incompatibility_unknown = /** @type {(inputs: Upload_Preflight_Incompatibility_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`An incompatible mod is not on SOTF Mods. Pick mods from the search.`)
};

const es_upload_preflight_incompatibility_unknown = /** @type {(inputs: Upload_Preflight_Incompatibility_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un mod incompatible no está en SOTF Mods. Elige mods desde la búsqueda.`)
};

const de_upload_preflight_incompatibility_unknown = /** @type {(inputs: Upload_Preflight_Incompatibility_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein inkompatibler Mod ist nicht auf SOTF Mods. Wähle Mods über die Suche.`)
};

const fr_upload_preflight_incompatibility_unknown = /** @type {(inputs: Upload_Preflight_Incompatibility_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un mod incompatible n’est pas sur SOTF Mods. Choisis des mods depuis la recherche.`)
};

const it_upload_preflight_incompatibility_unknown = /** @type {(inputs: Upload_Preflight_Incompatibility_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un mod incompatibile non è su SOTF Mods. Scegli i mod dalla ricerca.`)
};

const nl_upload_preflight_incompatibility_unknown = /** @type {(inputs: Upload_Preflight_Incompatibility_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een incompatibele mod staat niet op SOTF Mods. Kies mods via de zoekfunctie.`)
};

const pl_upload_preflight_incompatibility_unknown = /** @type {(inputs: Upload_Preflight_Incompatibility_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niezgodnego moda nie ma na SOTF Mods. Wybierz mody z wyszukiwarki.`)
};

const pt_upload_preflight_incompatibility_unknown = /** @type {(inputs: Upload_Preflight_Incompatibility_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um mod incompatível não está no SOTF Mods. Escolha mods pela pesquisa.`)
};

const ru_upload_preflight_incompatibility_unknown = /** @type {(inputs: Upload_Preflight_Incompatibility_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Несовместимого мода нет на SOTF Mods. Выберите моды через поиск.`)
};

const sv_upload_preflight_incompatibility_unknown = /** @type {(inputs: Upload_Preflight_Incompatibility_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En inkompatibel mod finns inte på SOTF Mods. Välj moddar via sökningen.`)
};

const tr_upload_preflight_incompatibility_unknown = /** @type {(inputs: Upload_Preflight_Incompatibility_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uyumsuz bir mod SOTF Mods’ta yok. Modları aramadan seç.`)
};

const zh_upload_preflight_incompatibility_unknown = /** @type {(inputs: Upload_Preflight_Incompatibility_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`某个不兼容的模组不在 SOTF Mods 上。请通过搜索选择模组。`)
};

const ja_upload_preflight_incompatibility_unknown = /** @type {(inputs: Upload_Preflight_Incompatibility_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`互換性なしに指定したModがSOTF Modsにありません。検索からModを選んでください。`)
};

/**
* | output |
* | --- |
* | "An incompatible mod is not on SOTF Mods. Pick mods from the search." |
*
* @param {Upload_Preflight_Incompatibility_UnknownInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_incompatibility_unknown = /** @type {((inputs?: Upload_Preflight_Incompatibility_UnknownInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Incompatibility_UnknownInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_incompatibility_unknown(inputs)
	if (locale === "de") return de_upload_preflight_incompatibility_unknown(inputs)
	if (locale === "fr") return fr_upload_preflight_incompatibility_unknown(inputs)
	if (locale === "it") return it_upload_preflight_incompatibility_unknown(inputs)
	if (locale === "nl") return nl_upload_preflight_incompatibility_unknown(inputs)
	if (locale === "pl") return pl_upload_preflight_incompatibility_unknown(inputs)
	if (locale === "pt") return pt_upload_preflight_incompatibility_unknown(inputs)
	if (locale === "ru") return ru_upload_preflight_incompatibility_unknown(inputs)
	if (locale === "sv") return sv_upload_preflight_incompatibility_unknown(inputs)
	if (locale === "tr") return tr_upload_preflight_incompatibility_unknown(inputs)
	if (locale === "zh") return zh_upload_preflight_incompatibility_unknown(inputs)
	if (locale === "ja") return ja_upload_preflight_incompatibility_unknown(inputs)
	return en_upload_preflight_incompatibility_unknown(inputs)
});
