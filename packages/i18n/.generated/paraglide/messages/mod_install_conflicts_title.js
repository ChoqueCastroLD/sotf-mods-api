/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Install_Conflicts_TitleInputs */

const en_mod_install_conflicts_title = /** @type {(inputs: Mod_Install_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Don’t use it together with:`)
};

const es_mod_install_conflicts_title = /** @type {(inputs: Mod_Install_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No lo uses junto con:`)
};

const de_mod_install_conflicts_title = /** @type {(inputs: Mod_Install_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht zusammen verwenden mit:`)
};

const fr_mod_install_conflicts_title = /** @type {(inputs: Mod_Install_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ne l’utilisez pas avec :`)
};

const it_mod_install_conflicts_title = /** @type {(inputs: Mod_Install_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non usarla insieme a:`)
};

const nl_mod_install_conflicts_title = /** @type {(inputs: Mod_Install_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet samen gebruiken met:`)
};

const pl_mod_install_conflicts_title = /** @type {(inputs: Mod_Install_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie używaj razem z:`)
};

const pt_mod_install_conflicts_title = /** @type {(inputs: Mod_Install_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não use junto com:`)
};

const ru_mod_install_conflicts_title = /** @type {(inputs: Mod_Install_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не используйте вместе с:`)
};

const sv_mod_install_conflicts_title = /** @type {(inputs: Mod_Install_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Använd inte tillsammans med:`)
};

const tr_mod_install_conflicts_title = /** @type {(inputs: Mod_Install_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şunlarla birlikte kullanma:`)
};

const zh_mod_install_conflicts_title = /** @type {(inputs: Mod_Install_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请勿与以下模组同时使用：`)
};

const ja_mod_install_conflicts_title = /** @type {(inputs: Mod_Install_Conflicts_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`次の MOD とは併用しないでください：`)
};

/**
* | output |
* | --- |
* | "Don’t use it together with:" |
*
* @param {Mod_Install_Conflicts_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_install_conflicts_title = /** @type {((inputs?: Mod_Install_Conflicts_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Install_Conflicts_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_install_conflicts_title(inputs)
	if (locale === "de") return de_mod_install_conflicts_title(inputs)
	if (locale === "fr") return fr_mod_install_conflicts_title(inputs)
	if (locale === "it") return it_mod_install_conflicts_title(inputs)
	if (locale === "nl") return nl_mod_install_conflicts_title(inputs)
	if (locale === "pl") return pl_mod_install_conflicts_title(inputs)
	if (locale === "pt") return pt_mod_install_conflicts_title(inputs)
	if (locale === "ru") return ru_mod_install_conflicts_title(inputs)
	if (locale === "sv") return sv_mod_install_conflicts_title(inputs)
	if (locale === "tr") return tr_mod_install_conflicts_title(inputs)
	if (locale === "zh") return zh_mod_install_conflicts_title(inputs)
	if (locale === "ja") return ja_mod_install_conflicts_title(inputs)
	return en_mod_install_conflicts_title(inputs)
});
