/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Picker_NoneInputs */

const en_kits_picker_none = /** @type {(inputs: Kits_Picker_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nothing found. Try the manifest ID.`)
};

const es_kits_picker_none = /** @type {(inputs: Kits_Picker_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se ha encontrado nada. Prueba con el ID del manifiesto.`)
};

const de_kits_picker_none = /** @type {(inputs: Kits_Picker_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nichts gefunden. Versuch es mit der Manifest-ID.`)
};

const fr_kits_picker_none = /** @type {(inputs: Kits_Picker_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun résultat. Essayez l’ID de manifeste.`)
};

const it_kits_picker_none = /** @type {(inputs: Kits_Picker_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun risultato. Prova con l’ID del manifest.`)
};

const nl_kits_picker_none = /** @type {(inputs: Kits_Picker_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niets gevonden. Probeer de manifest-ID.`)
};

const pl_kits_picker_none = /** @type {(inputs: Kits_Picker_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nic nie znaleziono. Spróbuj ID manifestu.`)
};

const pt_kits_picker_none = /** @type {(inputs: Kits_Picker_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nada encontrado. Tente o ID do manifesto.`)
};

const ru_kits_picker_none = /** @type {(inputs: Kits_Picker_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ничего не найдено. Попробуйте ID манифеста.`)
};

const sv_kits_picker_none = /** @type {(inputs: Kits_Picker_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inget hittades. Prova manifest-id:t.`)
};

const tr_kits_picker_none = /** @type {(inputs: Kits_Picker_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hiçbir şey bulunamadı. Manifest kimliğini dene.`)
};

const zh_kits_picker_none = /** @type {(inputs: Kits_Picker_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有找到结果，试试清单 ID。`)
};

const ja_kits_picker_none = /** @type {(inputs: Kits_Picker_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`見つかりませんでした。マニフェスト ID で試してください。`)
};

/**
* | output |
* | --- |
* | "Nothing found. Try the manifest ID." |
*
* @param {Kits_Picker_NoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_picker_none = /** @type {((inputs?: Kits_Picker_NoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Picker_NoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_picker_none(inputs)
	if (locale === "de") return de_kits_picker_none(inputs)
	if (locale === "fr") return fr_kits_picker_none(inputs)
	if (locale === "it") return it_kits_picker_none(inputs)
	if (locale === "nl") return nl_kits_picker_none(inputs)
	if (locale === "pl") return pl_kits_picker_none(inputs)
	if (locale === "pt") return pt_kits_picker_none(inputs)
	if (locale === "ru") return ru_kits_picker_none(inputs)
	if (locale === "sv") return sv_kits_picker_none(inputs)
	if (locale === "tr") return tr_kits_picker_none(inputs)
	if (locale === "zh") return zh_kits_picker_none(inputs)
	if (locale === "ja") return ja_kits_picker_none(inputs)
	return en_kits_picker_none(inputs)
});
