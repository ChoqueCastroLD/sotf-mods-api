/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Target_Removed_DetailInputs */

const en_upload_target_removed_detail = /** @type {(inputs: Upload_Target_Removed_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Removed mods can’t receive new versions.`)
};

const es_upload_target_removed_detail = /** @type {(inputs: Upload_Target_Removed_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los mods retirados no pueden recibir versiones nuevas.`)
};

const de_upload_target_removed_detail = /** @type {(inputs: Upload_Target_Removed_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entfernte Mods können keine neuen Versionen erhalten.`)
};

const fr_upload_target_removed_detail = /** @type {(inputs: Upload_Target_Removed_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les mods retirés ne peuvent pas recevoir de nouvelles versions.`)
};

const it_upload_target_removed_detail = /** @type {(inputs: Upload_Target_Removed_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le mod rimosse non possono ricevere nuove versioni.`)
};

const nl_upload_target_removed_detail = /** @type {(inputs: Upload_Target_Removed_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijderde mods kunnen geen nieuwe versies krijgen.`)
};

const pl_upload_target_removed_detail = /** @type {(inputs: Upload_Target_Removed_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usunięte mody nie mogą otrzymywać nowych wersji.`)
};

const pt_upload_target_removed_detail = /** @type {(inputs: Upload_Target_Removed_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods removidos não podem receber novas versões.`)
};

const ru_upload_target_removed_detail = /** @type {(inputs: Upload_Target_Removed_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалённые моды не могут получать новые версии.`)
};

const sv_upload_target_removed_detail = /** @type {(inputs: Upload_Target_Removed_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borttagna moddar kan inte få nya versioner.`)
};

const tr_upload_target_removed_detail = /** @type {(inputs: Upload_Target_Removed_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaldırılan modlar yeni sürüm alamaz.`)
};

const zh_upload_target_removed_detail = /** @type {(inputs: Upload_Target_Removed_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已移除的模组无法接收新版本。`)
};

const ja_upload_target_removed_detail = /** @type {(inputs: Upload_Target_Removed_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除されたMODには新しいバージョンを追加できません。`)
};

/**
* | output |
* | --- |
* | "Removed mods can’t receive new versions." |
*
* @param {Upload_Target_Removed_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_target_removed_detail = /** @type {((inputs?: Upload_Target_Removed_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Target_Removed_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_target_removed_detail(inputs)
	if (locale === "de") return de_upload_target_removed_detail(inputs)
	if (locale === "fr") return fr_upload_target_removed_detail(inputs)
	if (locale === "it") return it_upload_target_removed_detail(inputs)
	if (locale === "nl") return nl_upload_target_removed_detail(inputs)
	if (locale === "pl") return pl_upload_target_removed_detail(inputs)
	if (locale === "pt") return pt_upload_target_removed_detail(inputs)
	if (locale === "ru") return ru_upload_target_removed_detail(inputs)
	if (locale === "sv") return sv_upload_target_removed_detail(inputs)
	if (locale === "tr") return tr_upload_target_removed_detail(inputs)
	if (locale === "zh") return zh_upload_target_removed_detail(inputs)
	if (locale === "ja") return ja_upload_target_removed_detail(inputs)
	return en_upload_target_removed_detail(inputs)
});
