/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_New_Version_TitleInputs */

const en_upload_new_version_title = /** @type {(inputs: Upload_New_Version_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Update one of your mods`)
};

const es_upload_new_version_title = /** @type {(inputs: Upload_New_Version_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualizar uno de tus mods`)
};

const de_upload_new_version_title = /** @type {(inputs: Upload_New_Version_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einen deiner Mods aktualisieren`)
};

const fr_upload_new_version_title = /** @type {(inputs: Upload_New_Version_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mettre à jour un de vos mods`)
};

const it_upload_new_version_title = /** @type {(inputs: Upload_New_Version_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiorna una delle tue mod`)
};

const nl_upload_new_version_title = /** @type {(inputs: Upload_New_Version_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een van je mods bijwerken`)
};

const pl_upload_new_version_title = /** @type {(inputs: Upload_New_Version_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaktualizuj jeden ze swoich modów`)
};

const pt_upload_new_version_title = /** @type {(inputs: Upload_New_Version_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atualizar um dos seus mods`)
};

const ru_upload_new_version_title = /** @type {(inputs: Upload_New_Version_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обновить один из ваших модов`)
};

const sv_upload_new_version_title = /** @type {(inputs: Upload_New_Version_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppdatera en av dina moddar`)
};

const tr_upload_new_version_title = /** @type {(inputs: Upload_New_Version_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlarından birini güncelle`)
};

const zh_upload_new_version_title = /** @type {(inputs: Upload_New_Version_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新你的模组`)
};

const ja_upload_new_version_title = /** @type {(inputs: Upload_New_Version_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自分のMODを更新する`)
};

/**
* | output |
* | --- |
* | "Update one of your mods" |
*
* @param {Upload_New_Version_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_new_version_title = /** @type {((inputs?: Upload_New_Version_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_New_Version_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_new_version_title(inputs)
	if (locale === "de") return de_upload_new_version_title(inputs)
	if (locale === "fr") return fr_upload_new_version_title(inputs)
	if (locale === "it") return it_upload_new_version_title(inputs)
	if (locale === "nl") return nl_upload_new_version_title(inputs)
	if (locale === "pl") return pl_upload_new_version_title(inputs)
	if (locale === "pt") return pt_upload_new_version_title(inputs)
	if (locale === "ru") return ru_upload_new_version_title(inputs)
	if (locale === "sv") return sv_upload_new_version_title(inputs)
	if (locale === "tr") return tr_upload_new_version_title(inputs)
	if (locale === "zh") return zh_upload_new_version_title(inputs)
	if (locale === "ja") return ja_upload_new_version_title(inputs)
	return en_upload_new_version_title(inputs)
});
