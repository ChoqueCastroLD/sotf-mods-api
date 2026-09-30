/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Install_Step_Launch_TextInputs */

const en_mod_install_step_launch_text = /** @type {(inputs: Mod_Install_Step_Launch_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader loads the mod on start. Press F1 in the main menu to see the list of mods.`)
};

const es_mod_install_step_launch_text = /** @type {(inputs: Mod_Install_Step_Launch_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader carga el mod al arrancar. Pulsa F1 en el menú principal para ver la lista de mods.`)
};

const de_mod_install_step_launch_text = /** @type {(inputs: Mod_Install_Step_Launch_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader lädt den Mod beim Start. Drücke im Hauptmenü F1, um die Mod-Liste zu sehen.`)
};

const fr_mod_install_step_launch_text = /** @type {(inputs: Mod_Install_Step_Launch_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader charge le mod au démarrage. Appuyez sur F1 dans le menu principal pour voir la liste des mods.`)
};

const it_mod_install_step_launch_text = /** @type {(inputs: Mod_Install_Step_Launch_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader carica la mod all’avvio. Premi F1 nel menu principale per vedere l’elenco delle mod.`)
};

const nl_mod_install_step_launch_text = /** @type {(inputs: Mod_Install_Step_Launch_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader laadt de mod bij het opstarten. Druk in het hoofdmenu op F1 om de lijst met mods te zien.`)
};

const pl_mod_install_step_launch_text = /** @type {(inputs: Mod_Install_Step_Launch_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader wczytuje mod przy starcie. Naciśnij F1 w menu głównym, aby zobaczyć listę modów.`)
};

const pt_mod_install_step_launch_text = /** @type {(inputs: Mod_Install_Step_Launch_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O RedLoader carrega o mod ao iniciar. Aperte F1 no menu principal para ver a lista de mods.`)
};

const ru_mod_install_step_launch_text = /** @type {(inputs: Mod_Install_Step_Launch_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader загружает мод при запуске. Нажмите F1 в главном меню, чтобы увидеть список модов.`)
};

const sv_mod_install_step_launch_text = /** @type {(inputs: Mod_Install_Step_Launch_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader laddar moden vid start. Tryck F1 i huvudmenyn för att se listan med moddar.`)
};

const tr_mod_install_step_launch_text = /** @type {(inputs: Mod_Install_Step_Launch_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader modu açılışta yükler. Mod listesini görmek için ana menüde F1’e bas.`)
};

const zh_mod_install_step_launch_text = /** @type {(inputs: Mod_Install_Step_Launch_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader 会在启动时加载模组。在主菜单按 F1 查看模组列表。`)
};

const ja_mod_install_step_launch_text = /** @type {(inputs: Mod_Install_Step_Launch_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader が起動時に MOD を読み込みます。メインメニューで F1 を押すと MOD 一覧が表示されます。`)
};

/**
* | output |
* | --- |
* | "RedLoader loads the mod on start. Press F1 in the main menu to see the list of mods." |
*
* @param {Mod_Install_Step_Launch_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_install_step_launch_text = /** @type {((inputs?: Mod_Install_Step_Launch_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Install_Step_Launch_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_install_step_launch_text(inputs)
	if (locale === "de") return de_mod_install_step_launch_text(inputs)
	if (locale === "fr") return fr_mod_install_step_launch_text(inputs)
	if (locale === "it") return it_mod_install_step_launch_text(inputs)
	if (locale === "nl") return nl_mod_install_step_launch_text(inputs)
	if (locale === "pl") return pl_mod_install_step_launch_text(inputs)
	if (locale === "pt") return pt_mod_install_step_launch_text(inputs)
	if (locale === "ru") return ru_mod_install_step_launch_text(inputs)
	if (locale === "sv") return sv_mod_install_step_launch_text(inputs)
	if (locale === "tr") return tr_mod_install_step_launch_text(inputs)
	if (locale === "zh") return zh_mod_install_step_launch_text(inputs)
	if (locale === "ja") return ja_mod_install_step_launch_text(inputs)
	return en_mod_install_step_launch_text(inputs)
});
