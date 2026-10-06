/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Install_Help_TextInputs */

const en_content_install_help_text = /** @type {(inputs: Content_Install_Help_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask the community for help. Include your game version, RedLoader version and the mods you use.`)
};

const es_content_install_help_text = /** @type {(inputs: Content_Install_Help_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pide ayuda a la comunidad. Indica tu versión del juego, la de RedLoader y los mods que usas.`)
};

const de_content_install_help_text = /** @type {(inputs: Content_Install_Help_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frag die Community um Hilfe. Nenne deine Spielversion, deine RedLoader-Version und die Mods, die du nutzt.`)
};

const fr_content_install_help_text = /** @type {(inputs: Content_Install_Help_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demandez de l’aide à la communauté. Indiquez votre version du jeu, celle de RedLoader et les mods que vous utilisez.`)
};

const it_content_install_help_text = /** @type {(inputs: Content_Install_Help_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiedi aiuto alla community. Indica la versione del gioco, quella di RedLoader e le mod che usi.`)
};

const nl_content_install_help_text = /** @type {(inputs: Content_Install_Help_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vraag de community om hulp. Vermeld je gameversie, je RedLoader-versie en de mods die je gebruikt.`)
};

const pl_content_install_help_text = /** @type {(inputs: Content_Install_Help_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poproś o pomoc społeczność. Podaj wersję gry, wersję RedLoadera i mody, których używasz.`)
};

const pt_content_install_help_text = /** @type {(inputs: Content_Install_Help_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Peça ajuda à comunidade. Informe a versão do jogo, a do RedLoader e os mods que você usa.`)
};

const ru_content_install_help_text = /** @type {(inputs: Content_Install_Help_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Попросите помощи у сообщества. Укажите версию игры, версию RedLoader и используемые моды.`)
};

const sv_content_install_help_text = /** @type {(inputs: Content_Install_Help_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Be communityn om hjälp. Ange din spelversion, din RedLoader-version och de moddar du använder.`)
};

const tr_content_install_help_text = /** @type {(inputs: Content_Install_Help_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Topluluktan yardım iste. Oyun sürümünü, RedLoader sürümünü ve kullandığın modları belirt.`)
};

const zh_content_install_help_text = /** @type {(inputs: Content_Install_Help_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`向社区求助，并附上你的游戏版本、RedLoader 版本和所用模组。`)
};

const ja_content_install_help_text = /** @type {(inputs: Content_Install_Help_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コミュニティに質問してください。ゲームのバージョン、RedLoader のバージョン、使っている MOD を添えてください。`)
};

/**
* | output |
* | --- |
* | "Ask the community for help. Include your game version, RedLoader version and the mods you use." |
*
* @param {Content_Install_Help_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_install_help_text = /** @type {((inputs?: Content_Install_Help_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Install_Help_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_install_help_text(inputs)
	if (locale === "de") return de_content_install_help_text(inputs)
	if (locale === "fr") return fr_content_install_help_text(inputs)
	if (locale === "it") return it_content_install_help_text(inputs)
	if (locale === "nl") return nl_content_install_help_text(inputs)
	if (locale === "pl") return pl_content_install_help_text(inputs)
	if (locale === "pt") return pt_content_install_help_text(inputs)
	if (locale === "ru") return ru_content_install_help_text(inputs)
	if (locale === "sv") return sv_content_install_help_text(inputs)
	if (locale === "tr") return tr_content_install_help_text(inputs)
	if (locale === "zh") return zh_content_install_help_text(inputs)
	if (locale === "ja") return ja_content_install_help_text(inputs)
	return en_content_install_help_text(inputs)
});
