/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_New_Version_NoneInputs */

const en_upload_new_version_none = /** @type {(inputs: Upload_New_Version_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your published mods appear here to add a new version.`)
};

const es_upload_new_version_none = /** @type {(inputs: Upload_New_Version_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aquí aparecen tus mods publicados para añadirles una versión.`)
};

const de_upload_new_version_none = /** @type {(inputs: Upload_New_Version_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hier erscheinen deine veröffentlichten Mods, um eine neue Version hinzuzufügen.`)
};

const fr_upload_new_version_none = /** @type {(inputs: Upload_New_Version_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vos mods publiés apparaissent ici pour ajouter une nouvelle version.`)
};

const it_upload_new_version_none = /** @type {(inputs: Upload_New_Version_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qui compaiono le tue mod pubblicate per aggiungere una nuova versione.`)
};

const nl_upload_new_version_none = /** @type {(inputs: Upload_New_Version_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hier verschijnen je gepubliceerde mods om een nieuwe versie toe te voegen.`)
};

const pl_upload_new_version_none = /** @type {(inputs: Upload_New_Version_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutaj pojawią się twoje opublikowane mody, aby dodać nową wersję.`)
};

const pt_upload_new_version_none = /** @type {(inputs: Upload_New_Version_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seus mods publicados aparecem aqui para receber uma nova versão.`)
};

const ru_upload_new_version_none = /** @type {(inputs: Upload_New_Version_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Здесь появятся ваши опубликованные моды, чтобы добавить новую версию.`)
};

const sv_upload_new_version_none = /** @type {(inputs: Upload_New_Version_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dina publicerade moddar visas här så att du kan lägga till en ny version.`)
};

const tr_upload_new_version_none = /** @type {(inputs: Upload_New_Version_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yayınlanmış modların yeni sürüm eklemek için burada görünür.`)
};

const zh_upload_new_version_none = /** @type {(inputs: Upload_New_Version_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你已发布的模组会显示在这里，方便添加新版本。`)
};

const ja_upload_new_version_none = /** @type {(inputs: Upload_New_Version_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開済みのMODがここに表示され、新しいバージョンを追加できます。`)
};

/**
* | output |
* | --- |
* | "Your published mods appear here to add a new version." |
*
* @param {Upload_New_Version_NoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_new_version_none = /** @type {((inputs?: Upload_New_Version_NoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_New_Version_NoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_new_version_none(inputs)
	if (locale === "de") return de_upload_new_version_none(inputs)
	if (locale === "fr") return fr_upload_new_version_none(inputs)
	if (locale === "it") return it_upload_new_version_none(inputs)
	if (locale === "nl") return nl_upload_new_version_none(inputs)
	if (locale === "pl") return pl_upload_new_version_none(inputs)
	if (locale === "pt") return pt_upload_new_version_none(inputs)
	if (locale === "ru") return ru_upload_new_version_none(inputs)
	if (locale === "sv") return sv_upload_new_version_none(inputs)
	if (locale === "tr") return tr_upload_new_version_none(inputs)
	if (locale === "zh") return zh_upload_new_version_none(inputs)
	if (locale === "ja") return ja_upload_new_version_none(inputs)
	return en_upload_new_version_none(inputs)
});
