/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Version_BuildInputs */

const en_upload_version_build = /** @type {(inputs: Upload_Version_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds are versioned by date: each upload is a new version.`)
};

const es_upload_version_build = /** @type {(inputs: Upload_Version_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las builds se versionan por fecha: cada subida es una versión nueva.`)
};

const de_upload_version_build = /** @type {(inputs: Upload_Version_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds werden nach Datum versioniert: Jeder Upload ist eine neue Version.`)
};

const fr_upload_version_build = /** @type {(inputs: Upload_Version_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les builds sont versionnés par date : chaque envoi est une nouvelle version.`)
};

const it_upload_version_build = /** @type {(inputs: Upload_Version_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le build sono versionate per data: ogni caricamento è una nuova versione.`)
};

const nl_upload_version_build = /** @type {(inputs: Upload_Version_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds krijgen een versie op datum: elke upload is een nieuwe versie.`)
};

const pl_upload_version_build = /** @type {(inputs: Upload_Version_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buildy są wersjonowane datą: każda wysyłka to nowa wersja.`)
};

const pt_upload_version_build = /** @type {(inputs: Upload_Version_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As builds são versionadas por data: cada envio é uma nova versão.`)
};

const ru_upload_version_build = /** @type {(inputs: Upload_Version_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версии построек задаются датой: каждая загрузка это новая версия.`)
};

const sv_upload_version_build = /** @type {(inputs: Upload_Version_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Byggen versioneras efter datum: varje uppladdning är en ny version.`)
};

const tr_upload_version_build = /** @type {(inputs: Upload_Version_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapılar tarihe göre sürümlenir: her yükleme yeni bir sürümdür.`)
};

const zh_upload_version_build = /** @type {(inputs: Upload_Version_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建筑按日期区分版本：每次上传都是一个新版本。`)
};

const ja_upload_version_build = /** @type {(inputs: Upload_Version_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建築は日付でバージョン管理され、アップロードごとに新しいバージョンになります。`)
};

/**
* | output |
* | --- |
* | "Builds are versioned by date: each upload is a new version." |
*
* @param {Upload_Version_BuildInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_version_build = /** @type {((inputs?: Upload_Version_BuildInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Version_BuildInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_version_build(inputs)
	if (locale === "de") return de_upload_version_build(inputs)
	if (locale === "fr") return fr_upload_version_build(inputs)
	if (locale === "it") return it_upload_version_build(inputs)
	if (locale === "nl") return nl_upload_version_build(inputs)
	if (locale === "pl") return pl_upload_version_build(inputs)
	if (locale === "pt") return pt_upload_version_build(inputs)
	if (locale === "ru") return ru_upload_version_build(inputs)
	if (locale === "sv") return sv_upload_version_build(inputs)
	if (locale === "tr") return tr_upload_version_build(inputs)
	if (locale === "zh") return zh_upload_version_build(inputs)
	if (locale === "ja") return ja_upload_version_build(inputs)
	return en_upload_version_build(inputs)
});
