/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Start_Install_TitleInputs */

const en_landing_start_install_title = /** @type {(inputs: Landing_Start_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Install RedLoader`)
};

const es_landing_start_install_title = /** @type {(inputs: Landing_Start_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instala RedLoader`)
};

const de_landing_start_install_title = /** @type {(inputs: Landing_Start_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader installieren`)
};

const fr_landing_start_install_title = /** @type {(inputs: Landing_Start_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installez RedLoader`)
};

const it_landing_start_install_title = /** @type {(inputs: Landing_Start_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installa RedLoader`)
};

const nl_landing_start_install_title = /** @type {(inputs: Landing_Start_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installeer RedLoader`)
};

const pl_landing_start_install_title = /** @type {(inputs: Landing_Start_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zainstaluj RedLoader`)
};

const pt_landing_start_install_title = /** @type {(inputs: Landing_Start_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instale o RedLoader`)
};

const ru_landing_start_install_title = /** @type {(inputs: Landing_Start_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Установите RedLoader`)
};

const sv_landing_start_install_title = /** @type {(inputs: Landing_Start_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installera RedLoader`)
};

const tr_landing_start_install_title = /** @type {(inputs: Landing_Start_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader’ı kur`)
};

const zh_landing_start_install_title = /** @type {(inputs: Landing_Start_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安装 RedLoader`)
};

const ja_landing_start_install_title = /** @type {(inputs: Landing_Start_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader をインストール`)
};

/**
* | output |
* | --- |
* | "Install RedLoader" |
*
* @param {Landing_Start_Install_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_start_install_title = /** @type {((inputs?: Landing_Start_Install_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Start_Install_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_start_install_title(inputs)
	if (locale === "de") return de_landing_start_install_title(inputs)
	if (locale === "fr") return fr_landing_start_install_title(inputs)
	if (locale === "it") return it_landing_start_install_title(inputs)
	if (locale === "nl") return nl_landing_start_install_title(inputs)
	if (locale === "pl") return pl_landing_start_install_title(inputs)
	if (locale === "pt") return pt_landing_start_install_title(inputs)
	if (locale === "ru") return ru_landing_start_install_title(inputs)
	if (locale === "sv") return sv_landing_start_install_title(inputs)
	if (locale === "tr") return tr_landing_start_install_title(inputs)
	if (locale === "zh") return zh_landing_start_install_title(inputs)
	if (locale === "ja") return ja_landing_start_install_title(inputs)
	return en_landing_start_install_title(inputs)
});
