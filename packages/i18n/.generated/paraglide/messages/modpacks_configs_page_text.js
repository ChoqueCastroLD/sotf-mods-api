/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Configs_Page_TextInputs */

const en_modpacks_configs_page_text = /** @type {(inputs: Modpacks_Configs_Page_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Settings the modpack author uses for these mods. SotF Mods Manager copies them into your game folder when you install the modpack.`)
};

const es_modpacks_configs_page_text = /** @type {(inputs: Modpacks_Configs_Page_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajustes que usa el autor del modpack para estos mods. SotF Mods Manager los copia a la carpeta del juego cuando instalas el modpack.`)
};

const de_modpacks_configs_page_text = /** @type {(inputs: Modpacks_Configs_Page_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einstellungen, die der Autor des Modpacks für diese Mods nutzt. SotF Mods Manager kopiert sie in deinen Spielordner, wenn du das Modpack installierst.`)
};

const fr_modpacks_configs_page_text = /** @type {(inputs: Modpacks_Configs_Page_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réglages que l’auteur du modpack utilise pour ces mods. SotF Mods Manager les copie dans le dossier du jeu quand vous installez le modpack.`)
};

const it_modpacks_configs_page_text = /** @type {(inputs: Modpacks_Configs_Page_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impostazioni che l’autore del modpack usa per queste mod. SotF Mods Manager le copia nella cartella del gioco quando installi il modpack.`)
};

const nl_modpacks_configs_page_text = /** @type {(inputs: Modpacks_Configs_Page_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instellingen die de maker van de modpack voor deze mods gebruikt. SotF Mods Manager kopieert ze naar je gamemap als je de modpack installeert.`)
};

const pl_modpacks_configs_page_text = /** @type {(inputs: Modpacks_Configs_Page_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ustawienia, których autor modpacka używa dla tych modów. SotF Mods Manager kopiuje je do folderu gry, gdy instalujesz modpack.`)
};

const pt_modpacks_configs_page_text = /** @type {(inputs: Modpacks_Configs_Page_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configurações que o autor do modpack usa nesses mods. O SotF Mods Manager copia tudo para a pasta do jogo quando você instala o modpack.`)
};

const ru_modpacks_configs_page_text = /** @type {(inputs: Modpacks_Configs_Page_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Настройки, которые автор модпака использует для этих модов. SotF Mods Manager скопирует их в папку игры при установке модпака.`)
};

const sv_modpacks_configs_page_text = /** @type {(inputs: Modpacks_Configs_Page_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inställningar som modpaketets skapare använder för de här moddarna. SotF Mods Manager kopierar dem till spelmappen när du installerar modpaketet.`)
};

const tr_modpacks_configs_page_text = /** @type {(inputs: Modpacks_Configs_Page_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod paketinin yazarının bu modlar için kullandığı ayarlar. Mod paketini kurduğunda SotF Mods Manager bunları oyun klasörüne kopyalar.`)
};

const zh_modpacks_configs_page_text = /** @type {(inputs: Modpacks_Configs_Page_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`整合包作者为这些模组使用的设置。安装整合包时，SotF Mods Manager 会把它们复制到你的游戏文件夹。`)
};

const ja_modpacks_configs_page_text = /** @type {(inputs: Modpacks_Configs_Page_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modパックの作者がこれらの Mod に使っている設定です。Modパックをインストールすると、SotF Mods Manager がゲームフォルダにコピーします。`)
};

/**
* | output |
* | --- |
* | "Settings the modpack author uses for these mods. SotF Mods Manager copies them into your game folder when you install the modpack." |
*
* @param {Modpacks_Configs_Page_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_configs_page_text = /** @type {((inputs?: Modpacks_Configs_Page_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Configs_Page_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_configs_page_text(inputs)
	if (locale === "de") return de_modpacks_configs_page_text(inputs)
	if (locale === "fr") return fr_modpacks_configs_page_text(inputs)
	if (locale === "it") return it_modpacks_configs_page_text(inputs)
	if (locale === "nl") return nl_modpacks_configs_page_text(inputs)
	if (locale === "pl") return pl_modpacks_configs_page_text(inputs)
	if (locale === "pt") return pt_modpacks_configs_page_text(inputs)
	if (locale === "ru") return ru_modpacks_configs_page_text(inputs)
	if (locale === "sv") return sv_modpacks_configs_page_text(inputs)
	if (locale === "tr") return tr_modpacks_configs_page_text(inputs)
	if (locale === "zh") return zh_modpacks_configs_page_text(inputs)
	if (locale === "ja") return ja_modpacks_configs_page_text(inputs)
	return en_modpacks_configs_page_text(inputs)
});
