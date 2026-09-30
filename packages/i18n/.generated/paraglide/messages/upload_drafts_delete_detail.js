/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Upload_Drafts_Delete_DetailInputs */

const en_upload_drafts_delete_detail = /** @type {(inputs: Upload_Drafts_Delete_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.name}” and its unsent files will be gone. This can’t be undone.`)
};

const es_upload_drafts_delete_detail = /** @type {(inputs: Upload_Drafts_Delete_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`«${i?.name}» y sus archivos sin enviar desaparecerán. No se puede deshacer.`)
};

const de_upload_drafts_delete_detail = /** @type {(inputs: Upload_Drafts_Delete_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`„${i?.name}“ und seine nicht gesendeten Dateien verschwinden. Das lässt sich nicht rückgängig machen.`)
};

const fr_upload_drafts_delete_detail = /** @type {(inputs: Upload_Drafts_Delete_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`« ${i?.name} » et ses fichiers non envoyés disparaîtront. C’est irréversible.`)
};

const it_upload_drafts_delete_detail = /** @type {(inputs: Upload_Drafts_Delete_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.name}” e i suoi file non inviati spariranno. L’azione è irreversibile.`)
};

const nl_upload_drafts_delete_detail = /** @type {(inputs: Upload_Drafts_Delete_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`‘${i?.name}’ en de niet-verzonden bestanden verdwijnen. Dit kan niet ongedaan worden gemaakt.`)
};

const pl_upload_drafts_delete_detail = /** @type {(inputs: Upload_Drafts_Delete_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`„${i?.name}” i jego niewysłane pliki znikną. Tego nie da się cofnąć.`)
};

const pt_upload_drafts_delete_detail = /** @type {(inputs: Upload_Drafts_Delete_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.name}” e seus arquivos não enviados vão sumir. Não dá para desfazer.`)
};

const ru_upload_drafts_delete_detail = /** @type {(inputs: Upload_Drafts_Delete_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`«${i?.name}» и его неотправленные файлы исчезнут. Отменить это нельзя.`)
};

const sv_upload_drafts_delete_detail = /** @type {(inputs: Upload_Drafts_Delete_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`”${i?.name}” och dess oskickade filer försvinner. Det går inte att ångra.`)
};

const tr_upload_drafts_delete_detail = /** @type {(inputs: Upload_Drafts_Delete_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.name}” ve gönderilmemiş dosyaları silinecek. Bu geri alınamaz.`)
};

const zh_upload_drafts_delete_detail = /** @type {(inputs: Upload_Drafts_Delete_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.name}”及其未提交的文件将被删除，且无法恢复。`)
};

const ja_upload_drafts_delete_detail = /** @type {(inputs: Upload_Drafts_Delete_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`「${i?.name}」と未送信のファイルが削除されます。元に戻せません。`)
};

/**
* | output |
* | --- |
* | "“{name}” and its unsent files will be gone. This can’t be undone." |
*
* @param {Upload_Drafts_Delete_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_drafts_delete_detail = /** @type {((inputs: Upload_Drafts_Delete_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Drafts_Delete_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_drafts_delete_detail(inputs)
	if (locale === "de") return de_upload_drafts_delete_detail(inputs)
	if (locale === "fr") return fr_upload_drafts_delete_detail(inputs)
	if (locale === "it") return it_upload_drafts_delete_detail(inputs)
	if (locale === "nl") return nl_upload_drafts_delete_detail(inputs)
	if (locale === "pl") return pl_upload_drafts_delete_detail(inputs)
	if (locale === "pt") return pt_upload_drafts_delete_detail(inputs)
	if (locale === "ru") return ru_upload_drafts_delete_detail(inputs)
	if (locale === "sv") return sv_upload_drafts_delete_detail(inputs)
	if (locale === "tr") return tr_upload_drafts_delete_detail(inputs)
	if (locale === "zh") return zh_upload_drafts_delete_detail(inputs)
	if (locale === "ja") return ja_upload_drafts_delete_detail(inputs)
	return en_upload_drafts_delete_detail(inputs)
});
