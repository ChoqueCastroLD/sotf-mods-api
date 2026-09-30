/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_User_Legacy_TrustedInputs */

const en_ranger_user_legacy_trusted = /** @type {(inputs: Ranger_User_Legacy_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trusted on the old site`)
};

const es_ranger_user_legacy_trusted = /** @type {(inputs: Ranger_User_Legacy_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De confianza en la web antigua`)
};

const de_ranger_user_legacy_trusted = /** @type {(inputs: Ranger_User_Legacy_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auf der alten Seite vertrauenswürdig`)
};

const fr_ranger_user_legacy_trusted = /** @type {(inputs: Ranger_User_Legacy_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De confiance sur l’ancien site`)
};

const it_ranger_user_legacy_trusted = /** @type {(inputs: Ranger_User_Legacy_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fidato sul vecchio sito`)
};

const nl_ranger_user_legacy_trusted = /** @type {(inputs: Ranger_User_Legacy_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertrouwd op de oude site`)
};

const pl_ranger_user_legacy_trusted = /** @type {(inputs: Ranger_User_Legacy_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaufany na starej stronie`)
};

const pt_ranger_user_legacy_trusted = /** @type {(inputs: Ranger_User_Legacy_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confiável no site antigo`)
};

const ru_ranger_user_legacy_trusted = /** @type {(inputs: Ranger_User_Legacy_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Доверенный на старом сайте`)
};

const sv_ranger_user_legacy_trusted = /** @type {(inputs: Ranger_User_Legacy_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Betrodd på den gamla sajten`)
};

const tr_ranger_user_legacy_trusted = /** @type {(inputs: Ranger_User_Legacy_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eski sitede güvenilir`)
};

const zh_ranger_user_legacy_trusted = /** @type {(inputs: Ranger_User_Legacy_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`旧站受信任用户`)
};

const ja_ranger_user_legacy_trusted = /** @type {(inputs: Ranger_User_Legacy_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`旧サイトで信頼済み`)
};

/**
* | output |
* | --- |
* | "Trusted on the old site" |
*
* @param {Ranger_User_Legacy_TrustedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_legacy_trusted = /** @type {((inputs?: Ranger_User_Legacy_TrustedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_Legacy_TrustedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_legacy_trusted(inputs)
	if (locale === "de") return de_ranger_user_legacy_trusted(inputs)
	if (locale === "fr") return fr_ranger_user_legacy_trusted(inputs)
	if (locale === "it") return it_ranger_user_legacy_trusted(inputs)
	if (locale === "nl") return nl_ranger_user_legacy_trusted(inputs)
	if (locale === "pl") return pl_ranger_user_legacy_trusted(inputs)
	if (locale === "pt") return pt_ranger_user_legacy_trusted(inputs)
	if (locale === "ru") return ru_ranger_user_legacy_trusted(inputs)
	if (locale === "sv") return sv_ranger_user_legacy_trusted(inputs)
	if (locale === "tr") return tr_ranger_user_legacy_trusted(inputs)
	if (locale === "zh") return zh_ranger_user_legacy_trusted(inputs)
	if (locale === "ja") return ja_ranger_user_legacy_trusted(inputs)
	return en_ranger_user_legacy_trusted(inputs)
});
