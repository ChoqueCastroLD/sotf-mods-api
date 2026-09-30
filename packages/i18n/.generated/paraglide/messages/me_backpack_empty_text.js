/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Backpack_Empty_TextInputs */

const en_me_backpack_empty_text = /** @type {(inputs: Me_Backpack_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tap ♥ on a mod to stash it here and hear about its updates.`)
};

const es_me_backpack_empty_text = /** @type {(inputs: Me_Backpack_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pulsa ♥ en un mod para guardarlo aquí y enterarte de sus actualizaciones.`)
};

const de_me_backpack_empty_text = /** @type {(inputs: Me_Backpack_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tippe bei einem Mod auf ♥, um ihn hier zu verstauen und von seinen Updates zu erfahren.`)
};

const fr_me_backpack_empty_text = /** @type {(inputs: Me_Backpack_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Touchez ♥ sur un mod pour le ranger ici et être prévenu de ses mises à jour.`)
};

const it_me_backpack_empty_text = /** @type {(inputs: Me_Backpack_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tocca ♥ su una mod per metterla qui e sapere dei suoi aggiornamenti.`)
};

const nl_me_backpack_empty_text = /** @type {(inputs: Me_Backpack_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tik op ♥ bij een mod om hem hier op te bergen en over updates te horen.`)
};

const pl_me_backpack_empty_text = /** @type {(inputs: Me_Backpack_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stuknij ♥ przy modzie, aby schować go tutaj i dowiadywać się o aktualizacjach.`)
};

const pt_me_backpack_empty_text = /** @type {(inputs: Me_Backpack_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toque em ♥ em um mod para guardá-lo aqui e saber das atualizações.`)
};

const ru_me_backpack_empty_text = /** @type {(inputs: Me_Backpack_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нажмите ♥ у мода, чтобы положить его сюда и узнавать об обновлениях.`)
};

const sv_me_backpack_empty_text = /** @type {(inputs: Me_Backpack_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tryck på ♥ på en modd för att lägga den här och få veta om uppdateringar.`)
};

const tr_me_backpack_empty_text = /** @type {(inputs: Me_Backpack_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir modu buraya koymak ve güncellemelerinden haberdar olmak için ♥ simgesine dokun.`)
};

const zh_me_backpack_empty_text = /** @type {(inputs: Me_Backpack_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在模组上点 ♥ 就能放进背包，并收到更新通知。`)
};

const ja_me_backpack_empty_text = /** @type {(inputs: Me_Backpack_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODの ♥ をタップするとここにしまえて、アップデートのお知らせが届きます。`)
};

/**
* | output |
* | --- |
* | "Tap ♥ on a mod to stash it here and hear about its updates." |
*
* @param {Me_Backpack_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_backpack_empty_text = /** @type {((inputs?: Me_Backpack_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Backpack_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_backpack_empty_text(inputs)
	if (locale === "de") return de_me_backpack_empty_text(inputs)
	if (locale === "fr") return fr_me_backpack_empty_text(inputs)
	if (locale === "it") return it_me_backpack_empty_text(inputs)
	if (locale === "nl") return nl_me_backpack_empty_text(inputs)
	if (locale === "pl") return pl_me_backpack_empty_text(inputs)
	if (locale === "pt") return pt_me_backpack_empty_text(inputs)
	if (locale === "ru") return ru_me_backpack_empty_text(inputs)
	if (locale === "sv") return sv_me_backpack_empty_text(inputs)
	if (locale === "tr") return tr_me_backpack_empty_text(inputs)
	if (locale === "zh") return zh_me_backpack_empty_text(inputs)
	if (locale === "ja") return ja_me_backpack_empty_text(inputs)
	return en_me_backpack_empty_text(inputs)
});
