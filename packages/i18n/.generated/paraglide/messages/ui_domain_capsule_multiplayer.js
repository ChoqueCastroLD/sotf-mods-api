/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Capsule_MultiplayerInputs */

const en_ui_domain_capsule_multiplayer = /** @type {(inputs: Ui_Domain_Capsule_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multiplayer`)
};

const es_ui_domain_capsule_multiplayer = /** @type {(inputs: Ui_Domain_Capsule_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multijugador`)
};

const de_ui_domain_capsule_multiplayer = /** @type {(inputs: Ui_Domain_Capsule_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mehrspieler`)
};

const fr_ui_domain_capsule_multiplayer = /** @type {(inputs: Ui_Domain_Capsule_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multijoueur`)
};

const it_ui_domain_capsule_multiplayer = /** @type {(inputs: Ui_Domain_Capsule_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multigiocatore`)
};

const nl_ui_domain_capsule_multiplayer = /** @type {(inputs: Ui_Domain_Capsule_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multiplayer`)
};

const pl_ui_domain_capsule_multiplayer = /** @type {(inputs: Ui_Domain_Capsule_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tryb wieloosobowy`)
};

const pt_ui_domain_capsule_multiplayer = /** @type {(inputs: Ui_Domain_Capsule_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multijogador`)
};

const ru_ui_domain_capsule_multiplayer = /** @type {(inputs: Ui_Domain_Capsule_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мультиплеер`)
};

const sv_ui_domain_capsule_multiplayer = /** @type {(inputs: Ui_Domain_Capsule_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flerspelare`)
};

const tr_ui_domain_capsule_multiplayer = /** @type {(inputs: Ui_Domain_Capsule_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çok oyunculu`)
};

const zh_ui_domain_capsule_multiplayer = /** @type {(inputs: Ui_Domain_Capsule_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`多人游戏`)
};

const ja_ui_domain_capsule_multiplayer = /** @type {(inputs: Ui_Domain_Capsule_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`マルチプレイ`)
};

/**
* | output |
* | --- |
* | "Multiplayer" |
*
* @param {Ui_Domain_Capsule_MultiplayerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_capsule_multiplayer = /** @type {((inputs?: Ui_Domain_Capsule_MultiplayerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Capsule_MultiplayerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_capsule_multiplayer(inputs)
	if (locale === "de") return de_ui_domain_capsule_multiplayer(inputs)
	if (locale === "fr") return fr_ui_domain_capsule_multiplayer(inputs)
	if (locale === "it") return it_ui_domain_capsule_multiplayer(inputs)
	if (locale === "nl") return nl_ui_domain_capsule_multiplayer(inputs)
	if (locale === "pl") return pl_ui_domain_capsule_multiplayer(inputs)
	if (locale === "pt") return pt_ui_domain_capsule_multiplayer(inputs)
	if (locale === "ru") return ru_ui_domain_capsule_multiplayer(inputs)
	if (locale === "sv") return sv_ui_domain_capsule_multiplayer(inputs)
	if (locale === "tr") return tr_ui_domain_capsule_multiplayer(inputs)
	if (locale === "zh") return zh_ui_domain_capsule_multiplayer(inputs)
	if (locale === "ja") return ja_ui_domain_capsule_multiplayer(inputs)
	return en_ui_domain_capsule_multiplayer(inputs)
});
