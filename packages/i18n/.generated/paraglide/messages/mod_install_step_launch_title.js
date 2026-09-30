/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Install_Step_Launch_TitleInputs */

const en_mod_install_step_launch_title = /** @type {(inputs: Mod_Install_Step_Launch_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Launch the game`)
};

const es_mod_install_step_launch_title = /** @type {(inputs: Mod_Install_Step_Launch_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inicia el juego`)
};

const de_mod_install_step_launch_title = /** @type {(inputs: Mod_Install_Step_Launch_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spiel starten`)
};

const fr_mod_install_step_launch_title = /** @type {(inputs: Mod_Install_Step_Launch_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lancez le jeu`)
};

const it_mod_install_step_launch_title = /** @type {(inputs: Mod_Install_Step_Launch_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avvia il gioco`)
};

const nl_mod_install_step_launch_title = /** @type {(inputs: Mod_Install_Step_Launch_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start de game`)
};

const pl_mod_install_step_launch_title = /** @type {(inputs: Mod_Install_Step_Launch_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uruchom grę`)
};

const pt_mod_install_step_launch_title = /** @type {(inputs: Mod_Install_Step_Launch_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abra o jogo`)
};

const ru_mod_install_step_launch_title = /** @type {(inputs: Mod_Install_Step_Launch_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Запустите игру`)
};

const sv_mod_install_step_launch_title = /** @type {(inputs: Mod_Install_Step_Launch_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Starta spelet`)
};

const tr_mod_install_step_launch_title = /** @type {(inputs: Mod_Install_Step_Launch_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyunu başlat`)
};

const zh_mod_install_step_launch_title = /** @type {(inputs: Mod_Install_Step_Launch_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`启动游戏`)
};

const ja_mod_install_step_launch_title = /** @type {(inputs: Mod_Install_Step_Launch_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲームを起動する`)
};

/**
* | output |
* | --- |
* | "Launch the game" |
*
* @param {Mod_Install_Step_Launch_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_install_step_launch_title = /** @type {((inputs?: Mod_Install_Step_Launch_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Install_Step_Launch_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_install_step_launch_title(inputs)
	if (locale === "de") return de_mod_install_step_launch_title(inputs)
	if (locale === "fr") return fr_mod_install_step_launch_title(inputs)
	if (locale === "it") return it_mod_install_step_launch_title(inputs)
	if (locale === "nl") return nl_mod_install_step_launch_title(inputs)
	if (locale === "pl") return pl_mod_install_step_launch_title(inputs)
	if (locale === "pt") return pt_mod_install_step_launch_title(inputs)
	if (locale === "ru") return ru_mod_install_step_launch_title(inputs)
	if (locale === "sv") return sv_mod_install_step_launch_title(inputs)
	if (locale === "tr") return tr_mod_install_step_launch_title(inputs)
	if (locale === "zh") return zh_mod_install_step_launch_title(inputs)
	if (locale === "ja") return ja_mod_install_step_launch_title(inputs)
	return en_mod_install_step_launch_title(inputs)
});
