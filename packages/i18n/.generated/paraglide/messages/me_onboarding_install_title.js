/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Onboarding_Install_TitleInputs */

const en_me_onboarding_install_title = /** @type {(inputs: Me_Onboarding_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Install RedLoader`)
};

const es_me_onboarding_install_title = /** @type {(inputs: Me_Onboarding_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instala RedLoader`)
};

const de_me_onboarding_install_title = /** @type {(inputs: Me_Onboarding_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader installieren`)
};

const fr_me_onboarding_install_title = /** @type {(inputs: Me_Onboarding_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installer RedLoader`)
};

const it_me_onboarding_install_title = /** @type {(inputs: Me_Onboarding_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installa RedLoader`)
};

const nl_me_onboarding_install_title = /** @type {(inputs: Me_Onboarding_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader installeren`)
};

const pl_me_onboarding_install_title = /** @type {(inputs: Me_Onboarding_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zainstaluj RedLoader`)
};

const pt_me_onboarding_install_title = /** @type {(inputs: Me_Onboarding_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instale o RedLoader`)
};

const ru_me_onboarding_install_title = /** @type {(inputs: Me_Onboarding_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Установите RedLoader`)
};

const sv_me_onboarding_install_title = /** @type {(inputs: Me_Onboarding_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installera RedLoader`)
};

const tr_me_onboarding_install_title = /** @type {(inputs: Me_Onboarding_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader’ı kur`)
};

const zh_me_onboarding_install_title = /** @type {(inputs: Me_Onboarding_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安装 RedLoader`)
};

const ja_me_onboarding_install_title = /** @type {(inputs: Me_Onboarding_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader をインストール`)
};

/**
* | output |
* | --- |
* | "Install RedLoader" |
*
* @param {Me_Onboarding_Install_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_onboarding_install_title = /** @type {((inputs?: Me_Onboarding_Install_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Onboarding_Install_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_onboarding_install_title(inputs)
	if (locale === "de") return de_me_onboarding_install_title(inputs)
	if (locale === "fr") return fr_me_onboarding_install_title(inputs)
	if (locale === "it") return it_me_onboarding_install_title(inputs)
	if (locale === "nl") return nl_me_onboarding_install_title(inputs)
	if (locale === "pl") return pl_me_onboarding_install_title(inputs)
	if (locale === "pt") return pt_me_onboarding_install_title(inputs)
	if (locale === "ru") return ru_me_onboarding_install_title(inputs)
	if (locale === "sv") return sv_me_onboarding_install_title(inputs)
	if (locale === "tr") return tr_me_onboarding_install_title(inputs)
	if (locale === "zh") return zh_me_onboarding_install_title(inputs)
	if (locale === "ja") return ja_me_onboarding_install_title(inputs)
	return en_me_onboarding_install_title(inputs)
});
