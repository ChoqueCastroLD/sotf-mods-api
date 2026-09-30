/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Feed_TitleInputs */

const en_builds_feed_title = /** @type {(inputs: Builds_Feed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods: new and updated builds`)
};

const es_builds_feed_title = /** @type {(inputs: Builds_Feed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods: builds nuevas y actualizadas`)
};

const de_builds_feed_title = /** @type {(inputs: Builds_Feed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods: neue und aktualisierte Builds`)
};

const fr_builds_feed_title = /** @type {(inputs: Builds_Feed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods : builds nouvelles et mises à jour`)
};

const it_builds_feed_title = /** @type {(inputs: Builds_Feed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods: build nuove e aggiornate`)
};

const nl_builds_feed_title = /** @type {(inputs: Builds_Feed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods: nieuwe en bijgewerkte builds`)
};

const pl_builds_feed_title = /** @type {(inputs: Builds_Feed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods: nowe i zaktualizowane buildy`)
};

const pt_builds_feed_title = /** @type {(inputs: Builds_Feed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods: builds novas e atualizadas`)
};

const ru_builds_feed_title = /** @type {(inputs: Builds_Feed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods: новые и обновлённые постройки`)
};

const sv_builds_feed_title = /** @type {(inputs: Builds_Feed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods: nya och uppdaterade byggen`)
};

const tr_builds_feed_title = /** @type {(inputs: Builds_Feed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods: yeni ve güncellenen yapılar`)
};

const zh_builds_feed_title = /** @type {(inputs: Builds_Feed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods：新增和更新的建筑`)
};

const ja_builds_feed_title = /** @type {(inputs: Builds_Feed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods：新しい建築と更新された建築`)
};

/**
* | output |
* | --- |
* | "SOTF Mods: new and updated builds" |
*
* @param {Builds_Feed_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_feed_title = /** @type {((inputs?: Builds_Feed_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Feed_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_feed_title(inputs)
	if (locale === "de") return de_builds_feed_title(inputs)
	if (locale === "fr") return fr_builds_feed_title(inputs)
	if (locale === "it") return it_builds_feed_title(inputs)
	if (locale === "nl") return nl_builds_feed_title(inputs)
	if (locale === "pl") return pl_builds_feed_title(inputs)
	if (locale === "pt") return pt_builds_feed_title(inputs)
	if (locale === "ru") return ru_builds_feed_title(inputs)
	if (locale === "sv") return sv_builds_feed_title(inputs)
	if (locale === "tr") return tr_builds_feed_title(inputs)
	if (locale === "zh") return zh_builds_feed_title(inputs)
	if (locale === "ja") return ja_builds_feed_title(inputs)
	return en_builds_feed_title(inputs)
});
