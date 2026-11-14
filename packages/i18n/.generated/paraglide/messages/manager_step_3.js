/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Step_3Inputs */

const en_manager_step_3 = /** @type {(inputs: Manager_Step_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Install mods or a modpack, then click Play.`)
};

const es_manager_step_3 = /** @type {(inputs: Manager_Step_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instala mods o un modpack y luego haz clic en Jugar.`)
};

const de_manager_step_3 = /** @type {(inputs: Manager_Step_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installiere Mods oder ein Modpack und klicke dann auf Spielen.`)
};

const fr_manager_step_3 = /** @type {(inputs: Manager_Step_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installez des mods ou un modpack, puis cliquez sur Jouer.`)
};

const it_manager_step_3 = /** @type {(inputs: Manager_Step_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installa mod o un modpack, poi clicca Gioca.`)
};

const nl_manager_step_3 = /** @type {(inputs: Manager_Step_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installeer mods of een modpack en klik dan op Spelen.`)
};

const pl_manager_step_3 = /** @type {(inputs: Manager_Step_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zainstaluj mody lub modpack, a potem kliknij Graj.`)
};

const pt_manager_step_3 = /** @type {(inputs: Manager_Step_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instale mods ou um modpack e clique em Jogar.`)
};

const ru_manager_step_3 = /** @type {(inputs: Manager_Step_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Установите моды или модпак и нажмите «Играть».`)
};

const sv_manager_step_3 = /** @type {(inputs: Manager_Step_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installera moddar eller ett modpaket och klicka sedan på Spela.`)
};

const tr_manager_step_3 = /** @type {(inputs: Manager_Step_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modları veya bir mod paketini kur, sonra Oyna'ya tıkla.`)
};

const zh_manager_step_3 = /** @type {(inputs: Manager_Step_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安装模组或整合包，然后点击“开始游戏”。`)
};

const ja_manager_step_3 = /** @type {(inputs: Manager_Step_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod か Modパックをインストールし、「プレイ」をクリックします。`)
};

/**
* | output |
* | --- |
* | "Install mods or a modpack, then click Play." |
*
* @param {Manager_Step_3Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_step_3 = /** @type {((inputs?: Manager_Step_3Inputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Step_3Inputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_step_3(inputs)
	if (locale === "de") return de_manager_step_3(inputs)
	if (locale === "fr") return fr_manager_step_3(inputs)
	if (locale === "it") return it_manager_step_3(inputs)
	if (locale === "nl") return nl_manager_step_3(inputs)
	if (locale === "pl") return pl_manager_step_3(inputs)
	if (locale === "pt") return pt_manager_step_3(inputs)
	if (locale === "ru") return ru_manager_step_3(inputs)
	if (locale === "sv") return sv_manager_step_3(inputs)
	if (locale === "tr") return tr_manager_step_3(inputs)
	if (locale === "zh") return zh_manager_step_3(inputs)
	if (locale === "ja") return ja_manager_step_3(inputs)
	return en_manager_step_3(inputs)
});
