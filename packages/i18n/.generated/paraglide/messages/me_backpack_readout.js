/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Backpack_ReadoutInputs */

const en_me_backpack_readout = /** @type {(inputs: Me_Backpack_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your gear`)
};

const es_me_backpack_readout = /** @type {(inputs: Me_Backpack_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu equipo`)
};

const de_me_backpack_readout = /** @type {(inputs: Me_Backpack_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Ausrüstung`)
};

const fr_me_backpack_readout = /** @type {(inputs: Me_Backpack_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre équipement`)
};

const it_me_backpack_readout = /** @type {(inputs: Me_Backpack_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il tuo equipaggiamento`)
};

const nl_me_backpack_readout = /** @type {(inputs: Me_Backpack_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je uitrusting`)
};

const pl_me_backpack_readout = /** @type {(inputs: Me_Backpack_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twój ekwipunek`)
};

const pt_me_backpack_readout = /** @type {(inputs: Me_Backpack_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seu equipamento`)
};

const ru_me_backpack_readout = /** @type {(inputs: Me_Backpack_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваше снаряжение`)
};

const sv_me_backpack_readout = /** @type {(inputs: Me_Backpack_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din utrustning`)
};

const tr_me_backpack_readout = /** @type {(inputs: Me_Backpack_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teçhizatın`)
};

const zh_me_backpack_readout = /** @type {(inputs: Me_Backpack_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的装备`)
};

const ja_me_backpack_readout = /** @type {(inputs: Me_Backpack_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたの装備`)
};

/**
* | output |
* | --- |
* | "Your gear" |
*
* @param {Me_Backpack_ReadoutInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_backpack_readout = /** @type {((inputs?: Me_Backpack_ReadoutInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Backpack_ReadoutInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_backpack_readout(inputs)
	if (locale === "de") return de_me_backpack_readout(inputs)
	if (locale === "fr") return fr_me_backpack_readout(inputs)
	if (locale === "it") return it_me_backpack_readout(inputs)
	if (locale === "nl") return nl_me_backpack_readout(inputs)
	if (locale === "pl") return pl_me_backpack_readout(inputs)
	if (locale === "pt") return pt_me_backpack_readout(inputs)
	if (locale === "ru") return ru_me_backpack_readout(inputs)
	if (locale === "sv") return sv_me_backpack_readout(inputs)
	if (locale === "tr") return tr_me_backpack_readout(inputs)
	if (locale === "zh") return zh_me_backpack_readout(inputs)
	if (locale === "ja") return ja_me_backpack_readout(inputs)
	return en_me_backpack_readout(inputs)
});
