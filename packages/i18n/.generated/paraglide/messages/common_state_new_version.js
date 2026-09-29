/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_State_New_VersionInputs */

const en_common_state_new_version = /** @type {(inputs: Common_State_New_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A new version of the site is out. Reloading…`)
};

const es_common_state_new_version = /** @type {(inputs: Common_State_New_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hay una versión nueva del sitio. Recargando…`)
};

const de_common_state_new_version = /** @type {(inputs: Common_State_New_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eine neue Version der Seite ist da. Wird neu geladen …`)
};

const fr_common_state_new_version = /** @type {(inputs: Common_State_New_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Une nouvelle version du site est disponible. Rechargement…`)
};

const it_common_state_new_version = /** @type {(inputs: Common_State_New_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`È disponibile una nuova versione del sito. Ricarico…`)
};

const nl_common_state_new_version = /** @type {(inputs: Common_State_New_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er is een nieuwe versie van de site. Opnieuw laden…`)
};

const pl_common_state_new_version = /** @type {(inputs: Common_State_New_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jest nowa wersja strony. Wczytuję ponownie…`)
};

const pt_common_state_new_version = /** @type {(inputs: Common_State_New_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saiu uma nova versão do site. Recarregando…`)
};

const ru_common_state_new_version = /** @type {(inputs: Common_State_New_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вышла новая версия сайта. Перезагружаем…`)
};

const sv_common_state_new_version = /** @type {(inputs: Common_State_New_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En ny version av sajten finns. Laddar om…`)
};

const tr_common_state_new_version = /** @type {(inputs: Common_State_New_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sitenin yeni bir sürümü çıktı. Yeniden yükleniyor…`)
};

const zh_common_state_new_version = /** @type {(inputs: Common_State_New_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`网站有新版本，正在重新加载…`)
};

const ja_common_state_new_version = /** @type {(inputs: Common_State_New_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サイトの新しいバージョンがあります。再読み込みしています…`)
};

/**
* | output |
* | --- |
* | "A new version of the site is out. Reloading…" |
*
* @param {Common_State_New_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_state_new_version = /** @type {((inputs?: Common_State_New_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_State_New_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_state_new_version(inputs)
	if (locale === "de") return de_common_state_new_version(inputs)
	if (locale === "fr") return fr_common_state_new_version(inputs)
	if (locale === "it") return it_common_state_new_version(inputs)
	if (locale === "nl") return nl_common_state_new_version(inputs)
	if (locale === "pl") return pl_common_state_new_version(inputs)
	if (locale === "pt") return pt_common_state_new_version(inputs)
	if (locale === "ru") return ru_common_state_new_version(inputs)
	if (locale === "sv") return sv_common_state_new_version(inputs)
	if (locale === "tr") return tr_common_state_new_version(inputs)
	if (locale === "zh") return zh_common_state_new_version(inputs)
	if (locale === "ja") return ja_common_state_new_version(inputs)
	return en_common_state_new_version(inputs)
});
