/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Start_Install_TextInputs */

const en_landing_start_install_text = /** @type {(inputs: Landing_Start_Install_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The mod loader for Sons of the Forest. Set it up once with RedManager or by hand.`)
};

const es_landing_start_install_text = /** @type {(inputs: Landing_Start_Install_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El cargador de mods de Sons of the Forest. Instálalo una vez con RedManager o a mano.`)
};

const de_landing_start_install_text = /** @type {(inputs: Landing_Start_Install_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Mod-Loader für Sons of the Forest. Einmal einrichten, mit RedManager oder von Hand.`)
};

const fr_landing_start_install_text = /** @type {(inputs: Landing_Start_Install_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le chargeur de mods de Sons of the Forest. À installer une fois, avec RedManager ou à la main.`)
};

const it_landing_start_install_text = /** @type {(inputs: Landing_Start_Install_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il caricatore di mod per Sons of the Forest. Si installa una volta, con RedManager o a mano.`)
};

const nl_landing_start_install_text = /** @type {(inputs: Landing_Start_Install_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De modloader voor Sons of the Forest. Eén keer instellen, met RedManager of handmatig.`)
};

const pl_landing_start_install_text = /** @type {(inputs: Landing_Start_Install_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loader modów do Sons of the Forest. Zainstaluj go raz, przez RedManager albo ręcznie.`)
};

const pt_landing_start_install_text = /** @type {(inputs: Landing_Start_Install_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O carregador de mods de Sons of the Forest. Instale uma vez, com o RedManager ou manualmente.`)
};

const ru_landing_start_install_text = /** @type {(inputs: Landing_Start_Install_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузчик модов для Sons of the Forest. Устанавливается один раз — через RedManager или вручную.`)
};

const sv_landing_start_install_text = /** @type {(inputs: Landing_Start_Install_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddladdaren för Sons of the Forest. Installera den en gång, med RedManager eller för hand.`)
};

const tr_landing_start_install_text = /** @type {(inputs: Landing_Start_Install_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest için mod yükleyici. RedManager ile ya da elle bir kez kurman yeterli.`)
};

const zh_landing_start_install_text = /** @type {(inputs: Landing_Start_Install_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest 的模组加载器。用 RedManager 或手动安装一次即可。`)
};

const ja_landing_start_install_text = /** @type {(inputs: Landing_Start_Install_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest 用のMODローダーです。RedManager か手動で一度だけ設定します。`)
};

/**
* | output |
* | --- |
* | "The mod loader for Sons of the Forest. Set it up once with RedManager or by hand." |
*
* @param {Landing_Start_Install_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_start_install_text = /** @type {((inputs?: Landing_Start_Install_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Start_Install_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_start_install_text(inputs)
	if (locale === "de") return de_landing_start_install_text(inputs)
	if (locale === "fr") return fr_landing_start_install_text(inputs)
	if (locale === "it") return it_landing_start_install_text(inputs)
	if (locale === "nl") return nl_landing_start_install_text(inputs)
	if (locale === "pl") return pl_landing_start_install_text(inputs)
	if (locale === "pt") return pt_landing_start_install_text(inputs)
	if (locale === "ru") return ru_landing_start_install_text(inputs)
	if (locale === "sv") return sv_landing_start_install_text(inputs)
	if (locale === "tr") return tr_landing_start_install_text(inputs)
	if (locale === "zh") return zh_landing_start_install_text(inputs)
	if (locale === "ja") return ja_landing_start_install_text(inputs)
	return en_landing_start_install_text(inputs)
});
