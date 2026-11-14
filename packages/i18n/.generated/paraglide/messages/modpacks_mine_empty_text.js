/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Mine_Empty_TextInputs */

const en_modpacks_mine_empty_text = /** @type {(inputs: Modpacks_Mine_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create one from scratch or import a .sotfprofile exported from SotF Mods Manager.`)
};

const es_modpacks_mine_empty_text = /** @type {(inputs: Modpacks_Mine_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea uno desde cero o importa un .sotfprofile exportado desde SotF Mods Manager.`)
};

const de_modpacks_mine_empty_text = /** @type {(inputs: Modpacks_Mine_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erstelle eines von Grund auf oder importiere ein aus SotF Mods Manager exportiertes .sotfprofile.`)
};

const fr_modpacks_mine_empty_text = /** @type {(inputs: Modpacks_Mine_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créez-en un de zéro ou importez un .sotfprofile exporté depuis SotF Mods Manager.`)
};

const it_modpacks_mine_empty_text = /** @type {(inputs: Modpacks_Mine_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creane uno da zero o importa un .sotfprofile esportato da SotF Mods Manager.`)
};

const nl_modpacks_mine_empty_text = /** @type {(inputs: Modpacks_Mine_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maak er een vanaf nul of importeer een .sotfprofile die je uit SotF Mods Manager hebt geëxporteerd.`)
};

const pl_modpacks_mine_empty_text = /** @type {(inputs: Modpacks_Mine_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utwórz go od zera lub zaimportuj plik .sotfprofile wyeksportowany z SotF Mods Manager.`)
};

const pt_modpacks_mine_empty_text = /** @type {(inputs: Modpacks_Mine_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crie um do zero ou importe um .sotfprofile exportado do SotF Mods Manager.`)
};

const ru_modpacks_mine_empty_text = /** @type {(inputs: Modpacks_Mine_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Создайте модпак с нуля или импортируйте файл .sotfprofile, экспортированный из SotF Mods Manager.`)
};

const sv_modpacks_mine_empty_text = /** @type {(inputs: Modpacks_Mine_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapa ett från grunden eller importera en .sotfprofile som exporterats från SotF Mods Manager.`)
};

const tr_modpacks_mine_empty_text = /** @type {(inputs: Modpacks_Mine_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sıfırdan bir tane oluştur ya da SotF Mods Manager'dan dışa aktarılmış bir .sotfprofile içe aktar.`)
};

const zh_modpacks_mine_empty_text = /** @type {(inputs: Modpacks_Mine_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`从头创建一个，或导入从 SotF Mods Manager 导出的 .sotfprofile 文件。`)
};

const ja_modpacks_mine_empty_text = /** @type {(inputs: Modpacks_Mine_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一から作成するか、SotF Mods Manager からエクスポートした .sotfprofile をインポートしてください。`)
};

/**
* | output |
* | --- |
* | "Create one from scratch or import a .sotfprofile exported from SotF Mods Manager." |
*
* @param {Modpacks_Mine_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_mine_empty_text = /** @type {((inputs?: Modpacks_Mine_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Mine_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_mine_empty_text(inputs)
	if (locale === "de") return de_modpacks_mine_empty_text(inputs)
	if (locale === "fr") return fr_modpacks_mine_empty_text(inputs)
	if (locale === "it") return it_modpacks_mine_empty_text(inputs)
	if (locale === "nl") return nl_modpacks_mine_empty_text(inputs)
	if (locale === "pl") return pl_modpacks_mine_empty_text(inputs)
	if (locale === "pt") return pt_modpacks_mine_empty_text(inputs)
	if (locale === "ru") return ru_modpacks_mine_empty_text(inputs)
	if (locale === "sv") return sv_modpacks_mine_empty_text(inputs)
	if (locale === "tr") return tr_modpacks_mine_empty_text(inputs)
	if (locale === "zh") return zh_modpacks_mine_empty_text(inputs)
	if (locale === "ja") return ja_modpacks_mine_empty_text(inputs)
	return en_modpacks_mine_empty_text(inputs)
});
