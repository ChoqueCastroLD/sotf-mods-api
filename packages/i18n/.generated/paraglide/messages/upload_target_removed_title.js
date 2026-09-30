/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Target_Removed_TitleInputs */

const en_upload_target_removed_title = /** @type {(inputs: Upload_Target_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This mod was removed.`)
};

const es_upload_target_removed_title = /** @type {(inputs: Upload_Target_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este mod fue retirado.`)
};

const de_upload_target_removed_title = /** @type {(inputs: Upload_Target_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Mod wurde entfernt.`)
};

const fr_upload_target_removed_title = /** @type {(inputs: Upload_Target_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce mod a été retiré.`)
};

const it_upload_target_removed_title = /** @type {(inputs: Upload_Target_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa mod è stata rimossa.`)
};

const nl_upload_target_removed_title = /** @type {(inputs: Upload_Target_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze mod is verwijderd.`)
};

const pl_upload_target_removed_title = /** @type {(inputs: Upload_Target_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten mod został usunięty.`)
};

const pt_upload_target_removed_title = /** @type {(inputs: Upload_Target_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este mod foi removido.`)
};

const ru_upload_target_removed_title = /** @type {(inputs: Upload_Target_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этот мод удалён.`)
};

const sv_upload_target_removed_title = /** @type {(inputs: Upload_Target_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här modden har tagits bort.`)
};

const tr_upload_target_removed_title = /** @type {(inputs: Upload_Target_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu mod kaldırıldı.`)
};

const zh_upload_target_removed_title = /** @type {(inputs: Upload_Target_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此模组已被移除。`)
};

const ja_upload_target_removed_title = /** @type {(inputs: Upload_Target_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このMODは削除されました。`)
};

/**
* | output |
* | --- |
* | "This mod was removed." |
*
* @param {Upload_Target_Removed_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_target_removed_title = /** @type {((inputs?: Upload_Target_Removed_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Target_Removed_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_target_removed_title(inputs)
	if (locale === "de") return de_upload_target_removed_title(inputs)
	if (locale === "fr") return fr_upload_target_removed_title(inputs)
	if (locale === "it") return it_upload_target_removed_title(inputs)
	if (locale === "nl") return nl_upload_target_removed_title(inputs)
	if (locale === "pl") return pl_upload_target_removed_title(inputs)
	if (locale === "pt") return pt_upload_target_removed_title(inputs)
	if (locale === "ru") return ru_upload_target_removed_title(inputs)
	if (locale === "sv") return sv_upload_target_removed_title(inputs)
	if (locale === "tr") return tr_upload_target_removed_title(inputs)
	if (locale === "zh") return zh_upload_target_removed_title(inputs)
	if (locale === "ja") return ja_upload_target_removed_title(inputs)
	return en_upload_target_removed_title(inputs)
});
