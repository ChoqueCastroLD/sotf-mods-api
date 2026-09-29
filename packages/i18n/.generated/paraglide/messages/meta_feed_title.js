/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Meta_Feed_TitleInputs */

const en_meta_feed_title = /** @type {(inputs: Meta_Feed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods: new and updated mods`)
};

const es_meta_feed_title = /** @type {(inputs: Meta_Feed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods: mods nuevos y actualizados`)
};

const de_meta_feed_title = /** @type {(inputs: Meta_Feed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods: neue und aktualisierte Mods`)
};

const fr_meta_feed_title = /** @type {(inputs: Meta_Feed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods : mods nouveaux et mis à jour`)
};

const it_meta_feed_title = /** @type {(inputs: Meta_Feed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods: mod nuove e aggiornate`)
};

const nl_meta_feed_title = /** @type {(inputs: Meta_Feed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods: nieuwe en bijgewerkte mods`)
};

const pl_meta_feed_title = /** @type {(inputs: Meta_Feed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods: nowe i zaktualizowane mody`)
};

const pt_meta_feed_title = /** @type {(inputs: Meta_Feed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods: mods novos e atualizados`)
};

const ru_meta_feed_title = /** @type {(inputs: Meta_Feed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods: новые и обновлённые моды`)
};

const sv_meta_feed_title = /** @type {(inputs: Meta_Feed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods: nya och uppdaterade moddar`)
};

const tr_meta_feed_title = /** @type {(inputs: Meta_Feed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods: yeni ve güncellenen modlar`)
};

const zh_meta_feed_title = /** @type {(inputs: Meta_Feed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods：新增与更新的模组`)
};

const ja_meta_feed_title = /** @type {(inputs: Meta_Feed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods：新着・更新された MOD`)
};

/**
* | output |
* | --- |
* | "SOTF Mods: new and updated mods" |
*
* @param {Meta_Feed_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const meta_feed_title = /** @type {((inputs?: Meta_Feed_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Meta_Feed_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_meta_feed_title(inputs)
	if (locale === "de") return de_meta_feed_title(inputs)
	if (locale === "fr") return fr_meta_feed_title(inputs)
	if (locale === "it") return it_meta_feed_title(inputs)
	if (locale === "nl") return nl_meta_feed_title(inputs)
	if (locale === "pl") return pl_meta_feed_title(inputs)
	if (locale === "pt") return pt_meta_feed_title(inputs)
	if (locale === "ru") return ru_meta_feed_title(inputs)
	if (locale === "sv") return sv_meta_feed_title(inputs)
	if (locale === "tr") return tr_meta_feed_title(inputs)
	if (locale === "zh") return zh_meta_feed_title(inputs)
	if (locale === "ja") return ja_meta_feed_title(inputs)
	return en_meta_feed_title(inputs)
});
