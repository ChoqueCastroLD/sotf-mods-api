/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Safe_Remove_No_HintInputs */

const en_upload_safe_remove_no_hint = /** @type {(inputs: Upload_Safe_Remove_No_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saves made with it may break without it.`)
};

const es_upload_safe_remove_no_hint = /** @type {(inputs: Upload_Safe_Remove_No_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las partidas hechas con él pueden romperse sin él.`)
};

const de_upload_safe_remove_no_hint = /** @type {(inputs: Upload_Safe_Remove_No_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Damit erstellte Spielstände können ohne ihn kaputtgehen.`)
};

const fr_upload_safe_remove_no_hint = /** @type {(inputs: Upload_Safe_Remove_No_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les sauvegardes faites avec peuvent casser sans lui.`)
};

const it_upload_safe_remove_no_hint = /** @type {(inputs: Upload_Safe_Remove_No_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I salvataggi fatti con lei possono rompersi senza.`)
};

const nl_upload_safe_remove_no_hint = /** @type {(inputs: Upload_Safe_Remove_No_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saves die ermee gemaakt zijn, kunnen zonder hem breken.`)
};

const pl_upload_safe_remove_no_hint = /** @type {(inputs: Upload_Safe_Remove_No_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisy zrobione z nim mogą się bez niego zepsuć.`)
};

const pt_upload_safe_remove_no_hint = /** @type {(inputs: Upload_Safe_Remove_No_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saves feitos com ele podem quebrar sem ele.`)
};

const ru_upload_safe_remove_no_hint = /** @type {(inputs: Upload_Safe_Remove_No_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сохранения, сделанные с ним, могут сломаться без него.`)
};

const sv_upload_safe_remove_no_hint = /** @type {(inputs: Upload_Safe_Remove_No_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sparfiler som gjorts med den kan gå sönder utan den.`)
};

const tr_upload_safe_remove_no_hint = /** @type {(inputs: Upload_Safe_Remove_No_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onunla yapılan kayıtlar o olmadan bozulabilir.`)
};

const zh_upload_safe_remove_no_hint = /** @type {(inputs: Upload_Safe_Remove_No_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`使用它创建的存档在移除后可能损坏。`)
};

const ja_upload_safe_remove_no_hint = /** @type {(inputs: Upload_Safe_Remove_No_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`導入中に作ったセーブデータは、外すと壊れることがあります。`)
};

/**
* | output |
* | --- |
* | "Saves made with it may break without it." |
*
* @param {Upload_Safe_Remove_No_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_safe_remove_no_hint = /** @type {((inputs?: Upload_Safe_Remove_No_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Safe_Remove_No_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_safe_remove_no_hint(inputs)
	if (locale === "de") return de_upload_safe_remove_no_hint(inputs)
	if (locale === "fr") return fr_upload_safe_remove_no_hint(inputs)
	if (locale === "it") return it_upload_safe_remove_no_hint(inputs)
	if (locale === "nl") return nl_upload_safe_remove_no_hint(inputs)
	if (locale === "pl") return pl_upload_safe_remove_no_hint(inputs)
	if (locale === "pt") return pt_upload_safe_remove_no_hint(inputs)
	if (locale === "ru") return ru_upload_safe_remove_no_hint(inputs)
	if (locale === "sv") return sv_upload_safe_remove_no_hint(inputs)
	if (locale === "tr") return tr_upload_safe_remove_no_hint(inputs)
	if (locale === "zh") return zh_upload_safe_remove_no_hint(inputs)
	if (locale === "ja") return ja_upload_safe_remove_no_hint(inputs)
	return en_upload_safe_remove_no_hint(inputs)
});
