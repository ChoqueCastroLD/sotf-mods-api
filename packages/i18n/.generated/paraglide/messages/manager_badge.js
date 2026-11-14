/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_BadgeInputs */

const en_manager_badge = /** @type {(inputs: Manager_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`One click to install`)
};

const es_manager_badge = /** @type {(inputs: Manager_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un clic para instalar`)
};

const de_manager_badge = /** @type {(inputs: Manager_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein Klick zum Installieren`)
};

const fr_manager_badge = /** @type {(inputs: Manager_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un clic pour installer`)
};

const it_manager_badge = /** @type {(inputs: Manager_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un clic per installare`)
};

const nl_manager_badge = /** @type {(inputs: Manager_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eén klik om te installeren`)
};

const pl_manager_badge = /** @type {(inputs: Manager_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jedno kliknięcie, by zainstalować`)
};

const pt_manager_badge = /** @type {(inputs: Manager_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um clique para instalar`)
};

const ru_manager_badge = /** @type {(inputs: Manager_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Установка в один клик`)
};

const sv_manager_badge = /** @type {(inputs: Manager_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ett klick för att installera`)
};

const tr_manager_badge = /** @type {(inputs: Manager_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kurmak için tek tık`)
};

const zh_manager_badge = /** @type {(inputs: Manager_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一键安装`)
};

const ja_manager_badge = /** @type {(inputs: Manager_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ワンクリックでインストール`)
};

/**
* | output |
* | --- |
* | "One click to install" |
*
* @param {Manager_BadgeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_badge = /** @type {((inputs?: Manager_BadgeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_BadgeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_badge(inputs)
	if (locale === "de") return de_manager_badge(inputs)
	if (locale === "fr") return fr_manager_badge(inputs)
	if (locale === "it") return it_manager_badge(inputs)
	if (locale === "nl") return nl_manager_badge(inputs)
	if (locale === "pl") return pl_manager_badge(inputs)
	if (locale === "pt") return pt_manager_badge(inputs)
	if (locale === "ru") return ru_manager_badge(inputs)
	if (locale === "sv") return sv_manager_badge(inputs)
	if (locale === "tr") return tr_manager_badge(inputs)
	if (locale === "zh") return zh_manager_badge(inputs)
	if (locale === "ja") return ja_manager_badge(inputs)
	return en_manager_badge(inputs)
});
