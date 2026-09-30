/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Install_Help_TextInputs */

const en_content_install_help_text = /** @type {(inputs: Content_Install_Help_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Check whether the current game patch broke your mods, or ask the community. Include your game version, RedLoader version and the mods you use.`)
};

const es_content_install_help_text = /** @type {(inputs: Content_Install_Help_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comprueba si el parche actual del juego ha roto tus mods o pregunta a la comunidad. Indica tu versión del juego, la de RedLoader y los mods que usas.`)
};

const de_content_install_help_text = /** @type {(inputs: Content_Install_Help_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prüfe, ob der aktuelle Spielpatch deine Mods kaputt gemacht hat, oder frag die Community. Nenne deine Spielversion, deine RedLoader-Version und die Mods, die du nutzt.`)
};

const fr_content_install_help_text = /** @type {(inputs: Content_Install_Help_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérifiez si le patch actuel du jeu a cassé vos mods, ou demandez à la communauté. Indiquez votre version du jeu, celle de RedLoader et les mods que vous utilisez.`)
};

const it_content_install_help_text = /** @type {(inputs: Content_Install_Help_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controlla se la patch attuale del gioco ha rotto le tue mod, oppure chiedi alla community. Indica la versione del gioco, quella di RedLoader e le mod che usi.`)
};

const nl_content_install_help_text = /** @type {(inputs: Content_Install_Help_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kijk of de huidige gamepatch je mods heeft gebroken, of vraag het de community. Vermeld je gameversie, je RedLoader-versie en de mods die je gebruikt.`)
};

const pl_content_install_help_text = /** @type {(inputs: Content_Install_Help_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprawdź, czy obecna łatka gry nie zepsuła twoich modów, albo zapytaj społeczność. Podaj wersję gry, wersję RedLoadera i mody, których używasz.`)
};

const pt_content_install_help_text = /** @type {(inputs: Content_Install_Help_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veja se o patch atual do jogo quebrou seus mods ou pergunte à comunidade. Informe a versão do jogo, a do RedLoader e os mods que você usa.`)
};

const ru_content_install_help_text = /** @type {(inputs: Content_Install_Help_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверьте, не сломал ли текущий патч игры ваши моды, или спросите сообщество. Укажите версию игры, версию RedLoader и моды, которые используете.`)
};

const sv_content_install_help_text = /** @type {(inputs: Content_Install_Help_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kolla om den aktuella spelpatchen har förstört dina moddar, eller fråga gemenskapen. Ange din spelversion, din RedLoader-version och vilka moddar du använder.`)
};

const tr_content_install_help_text = /** @type {(inputs: Content_Install_Help_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mevcut oyun yamasının modlarını bozup bozmadığına bak ya da topluluğa sor. Oyun sürümünü, RedLoader sürümünü ve kullandığın modları yaz.`)
};

const zh_content_install_help_text = /** @type {(inputs: Content_Install_Help_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`看看当前游戏补丁是否让你的模组失效，或者向社区求助。请注明游戏版本、RedLoader 版本以及你使用的模组。`)
};

const ja_content_install_help_text = /** @type {(inputs: Content_Install_Help_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在のゲームパッチで Mod が動かなくなっていないか確認するか、コミュニティに質問してください。ゲームのバージョン、RedLoader のバージョン、使っている Mod を添えてください。`)
};

/**
* | output |
* | --- |
* | "Check whether the current game patch broke your mods, or ask the community. Include your game version, RedLoader version and the mods you use." |
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
