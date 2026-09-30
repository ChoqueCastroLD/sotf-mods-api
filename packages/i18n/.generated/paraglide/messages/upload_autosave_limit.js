/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Autosave_LimitInputs */

const en_upload_autosave_limit = /** @type {(inputs: Upload_Autosave_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Draft limit reached: delete a draft to save this one.`)
};

const es_upload_autosave_limit = /** @type {(inputs: Upload_Autosave_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Límite de borradores alcanzado: borra uno para guardar este.`)
};

const de_upload_autosave_limit = /** @type {(inputs: Upload_Autosave_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entwurfslimit erreicht: Lösche einen Entwurf, um diesen zu speichern.`)
};

const fr_upload_autosave_limit = /** @type {(inputs: Upload_Autosave_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limite de brouillons atteinte : supprimez-en un pour enregistrer celui-ci.`)
};

const it_upload_autosave_limit = /** @type {(inputs: Upload_Autosave_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limite di bozze raggiunto: eliminane una per salvare questa.`)
};

const nl_upload_autosave_limit = /** @type {(inputs: Upload_Autosave_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maximum aantal concepten bereikt: verwijder er een om dit op te slaan.`)
};

const pl_upload_autosave_limit = /** @type {(inputs: Upload_Autosave_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Osiągnięto limit szkiców: usuń jeden, aby zapisać ten.`)
};

const pt_upload_autosave_limit = /** @type {(inputs: Upload_Autosave_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limite de rascunhos atingido: exclua um para salvar este.`)
};

const ru_upload_autosave_limit = /** @type {(inputs: Upload_Autosave_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Достигнут лимит черновиков: удалите один, чтобы сохранить этот.`)
};

const sv_upload_autosave_limit = /** @type {(inputs: Upload_Autosave_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gränsen för utkast är nådd: ta bort ett för att spara det här.`)
};

const tr_upload_autosave_limit = /** @type {(inputs: Upload_Autosave_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taslak sınırına ulaşıldı: bunu kaydetmek için bir taslak sil.`)
};

const zh_upload_autosave_limit = /** @type {(inputs: Upload_Autosave_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`草稿数量已达上限：删除一个草稿才能保存这个。`)
};

const ja_upload_autosave_limit = /** @type {(inputs: Upload_Autosave_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下書きの上限に達しました。保存するには下書きを1つ削除してください。`)
};

/**
* | output |
* | --- |
* | "Draft limit reached: delete a draft to save this one." |
*
* @param {Upload_Autosave_LimitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_autosave_limit = /** @type {((inputs?: Upload_Autosave_LimitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Autosave_LimitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_autosave_limit(inputs)
	if (locale === "de") return de_upload_autosave_limit(inputs)
	if (locale === "fr") return fr_upload_autosave_limit(inputs)
	if (locale === "it") return it_upload_autosave_limit(inputs)
	if (locale === "nl") return nl_upload_autosave_limit(inputs)
	if (locale === "pl") return pl_upload_autosave_limit(inputs)
	if (locale === "pt") return pt_upload_autosave_limit(inputs)
	if (locale === "ru") return ru_upload_autosave_limit(inputs)
	if (locale === "sv") return sv_upload_autosave_limit(inputs)
	if (locale === "tr") return tr_upload_autosave_limit(inputs)
	if (locale === "zh") return zh_upload_autosave_limit(inputs)
	if (locale === "ja") return ja_upload_autosave_limit(inputs)
	return en_upload_autosave_limit(inputs)
});
