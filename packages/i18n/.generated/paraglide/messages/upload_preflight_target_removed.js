/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_Target_RemovedInputs */

const en_upload_preflight_target_removed = /** @type {(inputs: Upload_Preflight_Target_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The mod of this version was removed.`)
};

const es_upload_preflight_target_removed = /** @type {(inputs: Upload_Preflight_Target_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El mod de esta versión fue retirado.`)
};

const de_upload_preflight_target_removed = /** @type {(inputs: Upload_Preflight_Target_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Mod dieser Version wurde entfernt.`)
};

const fr_upload_preflight_target_removed = /** @type {(inputs: Upload_Preflight_Target_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le mod de cette version a été retiré.`)
};

const it_upload_preflight_target_removed = /** @type {(inputs: Upload_Preflight_Target_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La mod di questa versione è stata rimossa.`)
};

const nl_upload_preflight_target_removed = /** @type {(inputs: Upload_Preflight_Target_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De mod van deze versie is verwijderd.`)
};

const pl_upload_preflight_target_removed = /** @type {(inputs: Upload_Preflight_Target_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod tej wersji został usunięty.`)
};

const pt_upload_preflight_target_removed = /** @type {(inputs: Upload_Preflight_Target_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O mod desta versão foi removido.`)
};

const ru_upload_preflight_target_removed = /** @type {(inputs: Upload_Preflight_Target_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мод этой версии удалён.`)
};

const sv_upload_preflight_target_removed = /** @type {(inputs: Upload_Preflight_Target_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modden för den här versionen har tagits bort.`)
};

const tr_upload_preflight_target_removed = /** @type {(inputs: Upload_Preflight_Target_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu sürümün modu kaldırıldı.`)
};

const zh_upload_preflight_target_removed = /** @type {(inputs: Upload_Preflight_Target_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此版本对应的模组已被移除。`)
};

const ja_upload_preflight_target_removed = /** @type {(inputs: Upload_Preflight_Target_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このバージョンのMODは削除されました。`)
};

/**
* | output |
* | --- |
* | "The mod of this version was removed." |
*
* @param {Upload_Preflight_Target_RemovedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_target_removed = /** @type {((inputs?: Upload_Preflight_Target_RemovedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Target_RemovedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_target_removed(inputs)
	if (locale === "de") return de_upload_preflight_target_removed(inputs)
	if (locale === "fr") return fr_upload_preflight_target_removed(inputs)
	if (locale === "it") return it_upload_preflight_target_removed(inputs)
	if (locale === "nl") return nl_upload_preflight_target_removed(inputs)
	if (locale === "pl") return pl_upload_preflight_target_removed(inputs)
	if (locale === "pt") return pt_upload_preflight_target_removed(inputs)
	if (locale === "ru") return ru_upload_preflight_target_removed(inputs)
	if (locale === "sv") return sv_upload_preflight_target_removed(inputs)
	if (locale === "tr") return tr_upload_preflight_target_removed(inputs)
	if (locale === "zh") return zh_upload_preflight_target_removed(inputs)
	if (locale === "ja") return ja_upload_preflight_target_removed(inputs)
	return en_upload_preflight_target_removed(inputs)
});
