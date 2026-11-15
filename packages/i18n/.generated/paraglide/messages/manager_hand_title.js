/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Hand_TitleInputs */

const en_manager_hand_title = /** @type {(inputs: Manager_Hand_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`By hand`)
};

const es_manager_hand_title = /** @type {(inputs: Manager_Hand_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A mano`)
};

const de_manager_hand_title = /** @type {(inputs: Manager_Hand_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Von Hand`)
};

const fr_manager_hand_title = /** @type {(inputs: Manager_Hand_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`À la main`)
};

const it_manager_hand_title = /** @type {(inputs: Manager_Hand_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A mano`)
};

const nl_manager_hand_title = /** @type {(inputs: Manager_Hand_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Met de hand`)
};

const pl_manager_hand_title = /** @type {(inputs: Manager_Hand_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ręcznie`)
};

const pt_manager_hand_title = /** @type {(inputs: Manager_Hand_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`À mão`)
};

const ru_manager_hand_title = /** @type {(inputs: Manager_Hand_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вручную`)
};

const sv_manager_hand_title = /** @type {(inputs: Manager_Hand_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`För hand`)
};

const tr_manager_hand_title = /** @type {(inputs: Manager_Hand_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elle`)
};

const zh_manager_hand_title = /** @type {(inputs: Manager_Hand_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`手动安装`)
};

const ja_manager_hand_title = /** @type {(inputs: Manager_Hand_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`手作業の場合`)
};

/**
* | output |
* | --- |
* | "By hand" |
*
* @param {Manager_Hand_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_hand_title = /** @type {((inputs?: Manager_Hand_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Hand_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_hand_title(inputs)
	if (locale === "de") return de_manager_hand_title(inputs)
	if (locale === "fr") return fr_manager_hand_title(inputs)
	if (locale === "it") return it_manager_hand_title(inputs)
	if (locale === "nl") return nl_manager_hand_title(inputs)
	if (locale === "pl") return pl_manager_hand_title(inputs)
	if (locale === "pt") return pt_manager_hand_title(inputs)
	if (locale === "ru") return ru_manager_hand_title(inputs)
	if (locale === "sv") return sv_manager_hand_title(inputs)
	if (locale === "tr") return tr_manager_hand_title(inputs)
	if (locale === "zh") return zh_manager_hand_title(inputs)
	if (locale === "ja") return ja_manager_hand_title(inputs)
	return en_manager_hand_title(inputs)
});
