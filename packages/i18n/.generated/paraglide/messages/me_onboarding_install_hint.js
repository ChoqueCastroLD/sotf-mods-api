/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Onboarding_Install_HintInputs */

const en_me_onboarding_install_hint = /** @type {(inputs: Me_Onboarding_Install_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The mod loader every Sons of the Forest mod needs.`)
};

const es_me_onboarding_install_hint = /** @type {(inputs: Me_Onboarding_Install_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El cargador de mods que necesita cualquier mod de Sons of the Forest.`)
};

const de_me_onboarding_install_hint = /** @type {(inputs: Me_Onboarding_Install_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Mod-Loader, den jeder Sons-of-the-Forest-Mod braucht.`)
};

const fr_me_onboarding_install_hint = /** @type {(inputs: Me_Onboarding_Install_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le chargeur de mods dont chaque mod de Sons of the Forest a besoin.`)
};

const it_me_onboarding_install_hint = /** @type {(inputs: Me_Onboarding_Install_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il caricatore di mod necessario a ogni mod di Sons of the Forest.`)
};

const nl_me_onboarding_install_hint = /** @type {(inputs: Me_Onboarding_Install_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De modloader die elke Sons of the Forest-mod nodig heeft.`)
};

const pl_me_onboarding_install_hint = /** @type {(inputs: Me_Onboarding_Install_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loader modów, którego potrzebuje każdy mod do Sons of the Forest.`)
};

const pt_me_onboarding_install_hint = /** @type {(inputs: Me_Onboarding_Install_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O carregador de mods que todo mod de Sons of the Forest precisa.`)
};

const ru_me_onboarding_install_hint = /** @type {(inputs: Me_Onboarding_Install_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузчик модов, который нужен любому моду для Sons of the Forest.`)
};

const sv_me_onboarding_install_hint = /** @type {(inputs: Me_Onboarding_Install_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modladdaren som alla moddar till Sons of the Forest behöver.`)
};

const tr_me_onboarding_install_hint = /** @type {(inputs: Me_Onboarding_Install_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Her Sons of the Forest modunun ihtiyaç duyduğu mod yükleyici.`)
};

const zh_me_onboarding_install_hint = /** @type {(inputs: Me_Onboarding_Install_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所有 Sons of the Forest 模组都需要的模组加载器。`)
};

const ja_me_onboarding_install_hint = /** @type {(inputs: Me_Onboarding_Install_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest のすべてのMODに必要なMODローダーです。`)
};

/**
* | output |
* | --- |
* | "The mod loader every Sons of the Forest mod needs." |
*
* @param {Me_Onboarding_Install_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_onboarding_install_hint = /** @type {((inputs?: Me_Onboarding_Install_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Onboarding_Install_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_onboarding_install_hint(inputs)
	if (locale === "de") return de_me_onboarding_install_hint(inputs)
	if (locale === "fr") return fr_me_onboarding_install_hint(inputs)
	if (locale === "it") return it_me_onboarding_install_hint(inputs)
	if (locale === "nl") return nl_me_onboarding_install_hint(inputs)
	if (locale === "pl") return pl_me_onboarding_install_hint(inputs)
	if (locale === "pt") return pt_me_onboarding_install_hint(inputs)
	if (locale === "ru") return ru_me_onboarding_install_hint(inputs)
	if (locale === "sv") return sv_me_onboarding_install_hint(inputs)
	if (locale === "tr") return tr_me_onboarding_install_hint(inputs)
	if (locale === "zh") return zh_me_onboarding_install_hint(inputs)
	if (locale === "ja") return ja_me_onboarding_install_hint(inputs)
	return en_me_onboarding_install_hint(inputs)
});
