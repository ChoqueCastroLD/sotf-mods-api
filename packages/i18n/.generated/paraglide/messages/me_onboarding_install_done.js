/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Onboarding_Install_DoneInputs */

const en_me_onboarding_install_done = /** @type {(inputs: Me_Onboarding_Install_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I installed it`)
};

const es_me_onboarding_install_done = /** @type {(inputs: Me_Onboarding_Install_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ya lo he instalado`)
};

const de_me_onboarding_install_done = /** @type {(inputs: Me_Onboarding_Install_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ich habe ihn installiert`)
};

const fr_me_onboarding_install_done = /** @type {(inputs: Me_Onboarding_Install_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je l’ai installé`)
};

const it_me_onboarding_install_done = /** @type {(inputs: Me_Onboarding_Install_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’ho installato`)
};

const nl_me_onboarding_install_done = /** @type {(inputs: Me_Onboarding_Install_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ik heb hem geïnstalleerd`)
};

const pl_me_onboarding_install_done = /** @type {(inputs: Me_Onboarding_Install_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zainstalowałem go`)
};

const pt_me_onboarding_install_done = /** @type {(inputs: Me_Onboarding_Install_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Já instalei`)
};

const ru_me_onboarding_install_done = /** @type {(inputs: Me_Onboarding_Install_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Я его установил`)
};

const sv_me_onboarding_install_done = /** @type {(inputs: Me_Onboarding_Install_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jag har installerat den`)
};

const tr_me_onboarding_install_done = /** @type {(inputs: Me_Onboarding_Install_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kurdum`)
};

const zh_me_onboarding_install_done = /** @type {(inputs: Me_Onboarding_Install_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我已安装`)
};

const ja_me_onboarding_install_done = /** @type {(inputs: Me_Onboarding_Install_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`インストールした`)
};

/**
* | output |
* | --- |
* | "I installed it" |
*
* @param {Me_Onboarding_Install_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_onboarding_install_done = /** @type {((inputs?: Me_Onboarding_Install_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Onboarding_Install_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_onboarding_install_done(inputs)
	if (locale === "de") return de_me_onboarding_install_done(inputs)
	if (locale === "fr") return fr_me_onboarding_install_done(inputs)
	if (locale === "it") return it_me_onboarding_install_done(inputs)
	if (locale === "nl") return nl_me_onboarding_install_done(inputs)
	if (locale === "pl") return pl_me_onboarding_install_done(inputs)
	if (locale === "pt") return pt_me_onboarding_install_done(inputs)
	if (locale === "ru") return ru_me_onboarding_install_done(inputs)
	if (locale === "sv") return sv_me_onboarding_install_done(inputs)
	if (locale === "tr") return tr_me_onboarding_install_done(inputs)
	if (locale === "zh") return zh_me_onboarding_install_done(inputs)
	if (locale === "ja") return ja_me_onboarding_install_done(inputs)
	return en_me_onboarding_install_done(inputs)
});
