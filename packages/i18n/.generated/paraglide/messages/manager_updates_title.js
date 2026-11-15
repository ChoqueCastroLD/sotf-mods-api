/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Updates_TitleInputs */

const en_manager_updates_title = /** @type {(inputs: Manager_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updates`)
};

const es_manager_updates_title = /** @type {(inputs: Manager_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualizaciones`)
};

const de_manager_updates_title = /** @type {(inputs: Manager_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updates`)
};

const fr_manager_updates_title = /** @type {(inputs: Manager_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mises à jour`)
};

const it_manager_updates_title = /** @type {(inputs: Manager_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiornamenti`)
};

const nl_manager_updates_title = /** @type {(inputs: Manager_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updates`)
};

const pl_manager_updates_title = /** @type {(inputs: Manager_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktualizacje`)
};

const pt_manager_updates_title = /** @type {(inputs: Manager_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atualizações`)
};

const ru_manager_updates_title = /** @type {(inputs: Manager_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обновления`)
};

const sv_manager_updates_title = /** @type {(inputs: Manager_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppdateringar`)
};

const tr_manager_updates_title = /** @type {(inputs: Manager_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güncellemeler`)
};

const zh_manager_updates_title = /** @type {(inputs: Manager_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新`)
};

const ja_manager_updates_title = /** @type {(inputs: Manager_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アップデート`)
};

/**
* | output |
* | --- |
* | "Updates" |
*
* @param {Manager_Updates_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_updates_title = /** @type {((inputs?: Manager_Updates_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Updates_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_updates_title(inputs)
	if (locale === "de") return de_manager_updates_title(inputs)
	if (locale === "fr") return fr_manager_updates_title(inputs)
	if (locale === "it") return it_manager_updates_title(inputs)
	if (locale === "nl") return nl_manager_updates_title(inputs)
	if (locale === "pl") return pl_manager_updates_title(inputs)
	if (locale === "pt") return pt_manager_updates_title(inputs)
	if (locale === "ru") return ru_manager_updates_title(inputs)
	if (locale === "sv") return sv_manager_updates_title(inputs)
	if (locale === "tr") return tr_manager_updates_title(inputs)
	if (locale === "zh") return zh_manager_updates_title(inputs)
	if (locale === "ja") return ja_manager_updates_title(inputs)
	return en_manager_updates_title(inputs)
});
