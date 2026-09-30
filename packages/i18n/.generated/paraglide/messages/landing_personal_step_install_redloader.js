/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Personal_Step_Install_RedloaderInputs */

const en_landing_personal_step_install_redloader = /** @type {(inputs: Landing_Personal_Step_Install_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Install RedLoader`)
};

const es_landing_personal_step_install_redloader = /** @type {(inputs: Landing_Personal_Step_Install_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instala RedLoader`)
};

const de_landing_personal_step_install_redloader = /** @type {(inputs: Landing_Personal_Step_Install_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader installieren`)
};

const fr_landing_personal_step_install_redloader = /** @type {(inputs: Landing_Personal_Step_Install_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installer RedLoader`)
};

const it_landing_personal_step_install_redloader = /** @type {(inputs: Landing_Personal_Step_Install_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installa RedLoader`)
};

const nl_landing_personal_step_install_redloader = /** @type {(inputs: Landing_Personal_Step_Install_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installeer RedLoader`)
};

const pl_landing_personal_step_install_redloader = /** @type {(inputs: Landing_Personal_Step_Install_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zainstaluj RedLoader`)
};

const pt_landing_personal_step_install_redloader = /** @type {(inputs: Landing_Personal_Step_Install_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instale o RedLoader`)
};

const ru_landing_personal_step_install_redloader = /** @type {(inputs: Landing_Personal_Step_Install_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Установить RedLoader`)
};

const sv_landing_personal_step_install_redloader = /** @type {(inputs: Landing_Personal_Step_Install_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installera RedLoader`)
};

const tr_landing_personal_step_install_redloader = /** @type {(inputs: Landing_Personal_Step_Install_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader’ı kur`)
};

const zh_landing_personal_step_install_redloader = /** @type {(inputs: Landing_Personal_Step_Install_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安装 RedLoader`)
};

const ja_landing_personal_step_install_redloader = /** @type {(inputs: Landing_Personal_Step_Install_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader をインストール`)
};

/**
* | output |
* | --- |
* | "Install RedLoader" |
*
* @param {Landing_Personal_Step_Install_RedloaderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_personal_step_install_redloader = /** @type {((inputs?: Landing_Personal_Step_Install_RedloaderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Personal_Step_Install_RedloaderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_personal_step_install_redloader(inputs)
	if (locale === "de") return de_landing_personal_step_install_redloader(inputs)
	if (locale === "fr") return fr_landing_personal_step_install_redloader(inputs)
	if (locale === "it") return it_landing_personal_step_install_redloader(inputs)
	if (locale === "nl") return nl_landing_personal_step_install_redloader(inputs)
	if (locale === "pl") return pl_landing_personal_step_install_redloader(inputs)
	if (locale === "pt") return pt_landing_personal_step_install_redloader(inputs)
	if (locale === "ru") return ru_landing_personal_step_install_redloader(inputs)
	if (locale === "sv") return sv_landing_personal_step_install_redloader(inputs)
	if (locale === "tr") return tr_landing_personal_step_install_redloader(inputs)
	if (locale === "zh") return zh_landing_personal_step_install_redloader(inputs)
	if (locale === "ja") return ja_landing_personal_step_install_redloader(inputs)
	return en_landing_personal_step_install_redloader(inputs)
});
