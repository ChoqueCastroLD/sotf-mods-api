/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Kelvin_Status_UnavailableInputs */

const en_content_kelvin_status_unavailable = /** @type {(inputs: Content_Kelvin_Status_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We couldn’t load the mod’s current status. The mod page has the latest version.`)
};

const es_content_kelvin_status_unavailable = /** @type {(inputs: Content_Kelvin_Status_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No pudimos cargar el estado actual del mod. La página del mod tiene la última versión.`)
};

const de_content_kelvin_status_unavailable = /** @type {(inputs: Content_Kelvin_Status_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der aktuelle Status des Mods konnte nicht geladen werden. Die Mod-Seite zeigt die neueste Version.`)
};

const fr_content_kelvin_status_unavailable = /** @type {(inputs: Content_Kelvin_Status_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de charger l’état actuel du mod. La page du mod indique la dernière version.`)
};

const it_content_kelvin_status_unavailable = /** @type {(inputs: Content_Kelvin_Status_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non siamo riusciti a caricare lo stato attuale della mod. La pagina della mod mostra l’ultima versione.`)
};

const nl_content_kelvin_status_unavailable = /** @type {(inputs: Content_Kelvin_Status_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We konden de huidige status van de mod niet laden. De modpagina toont de nieuwste versie.`)
};

const pl_content_kelvin_status_unavailable = /** @type {(inputs: Content_Kelvin_Status_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wczytać obecnego stanu moda. Najnowsza wersja jest na stronie moda.`)
};

const pt_content_kelvin_status_unavailable = /** @type {(inputs: Content_Kelvin_Status_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não conseguimos carregar o status atual do mod. A página do mod tem a versão mais recente.`)
};

const ru_content_kelvin_status_unavailable = /** @type {(inputs: Content_Kelvin_Status_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось загрузить текущий статус мода. Последняя версия есть на странице мода.`)
};

const sv_content_kelvin_status_unavailable = /** @type {(inputs: Content_Kelvin_Status_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vi kunde inte läsa in moddens aktuella status. Moddsidan visar den senaste versionen.`)
};

const tr_content_kelvin_status_unavailable = /** @type {(inputs: Content_Kelvin_Status_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modun güncel durumunu yükleyemedik. Mod sayfasında en son sürüm var.`)
};

const zh_content_kelvin_status_unavailable = /** @type {(inputs: Content_Kelvin_Status_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法加载模组的当前状态。模组页面上有最新版本。`)
};

const ja_content_kelvin_status_unavailable = /** @type {(inputs: Content_Kelvin_Status_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod の現在の状態を読み込めませんでした。最新バージョンは Mod のページで確認できます。`)
};

/**
* | output |
* | --- |
* | "We couldn’t load the mod’s current status. The mod page has the latest version." |
*
* @param {Content_Kelvin_Status_UnavailableInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_kelvin_status_unavailable = /** @type {((inputs?: Content_Kelvin_Status_UnavailableInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_Status_UnavailableInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_kelvin_status_unavailable(inputs)
	if (locale === "de") return de_content_kelvin_status_unavailable(inputs)
	if (locale === "fr") return fr_content_kelvin_status_unavailable(inputs)
	if (locale === "it") return it_content_kelvin_status_unavailable(inputs)
	if (locale === "nl") return nl_content_kelvin_status_unavailable(inputs)
	if (locale === "pl") return pl_content_kelvin_status_unavailable(inputs)
	if (locale === "pt") return pt_content_kelvin_status_unavailable(inputs)
	if (locale === "ru") return ru_content_kelvin_status_unavailable(inputs)
	if (locale === "sv") return sv_content_kelvin_status_unavailable(inputs)
	if (locale === "tr") return tr_content_kelvin_status_unavailable(inputs)
	if (locale === "zh") return zh_content_kelvin_status_unavailable(inputs)
	if (locale === "ja") return ja_content_kelvin_status_unavailable(inputs)
	return en_content_kelvin_status_unavailable(inputs)
});
