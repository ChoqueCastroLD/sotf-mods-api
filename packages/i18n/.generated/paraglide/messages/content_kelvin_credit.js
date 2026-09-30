/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ author: NonNullable<unknown> }} Content_Kelvin_CreditInputs */

const en_content_kelvin_credit = /** @type {(inputs: Content_Kelvin_CreditInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`KelvinSeek is made and maintained by ${i?.author}; SOTF Mods only runs the API it talks to. Kelvin and Sons of the Forest belong to Endnight Games; this is a fan project.`)
};

const es_content_kelvin_credit = /** @type {(inputs: Content_Kelvin_CreditInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`KelvinSeek lo crea y mantiene ${i?.author}; SOTF Mods solo aloja la API con la que habla. Kelvin y Sons of the Forest pertenecen a Endnight Games; este es un proyecto de fans.`)
};

const de_content_kelvin_credit = /** @type {(inputs: Content_Kelvin_CreditInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`KelvinSeek wird von ${i?.author} entwickelt und gepflegt; SOTF Mods betreibt nur die API, mit der er spricht. Kelvin und Sons of the Forest gehören Endnight Games; dies ist ein Fanprojekt.`)
};

const fr_content_kelvin_credit = /** @type {(inputs: Content_Kelvin_CreditInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`KelvinSeek est créé et maintenu par ${i?.author} ; SOTF Mods héberge seulement l’API avec laquelle il communique. Kelvin et Sons of the Forest appartiennent à Endnight Games ; ceci est un projet de fans.`)
};

const it_content_kelvin_credit = /** @type {(inputs: Content_Kelvin_CreditInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`KelvinSeek è creato e mantenuto da ${i?.author}; SOTF Mods ospita solo l’API con cui comunica. Kelvin e Sons of the Forest appartengono a Endnight Games; questo è un progetto di fan.`)
};

const nl_content_kelvin_credit = /** @type {(inputs: Content_Kelvin_CreditInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`KelvinSeek wordt gemaakt en onderhouden door ${i?.author}; SOTF Mods host alleen de API waarmee hij praat. Kelvin en Sons of the Forest zijn van Endnight Games; dit is een fanproject.`)
};

const pl_content_kelvin_credit = /** @type {(inputs: Content_Kelvin_CreditInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`KelvinSeek tworzy i utrzymuje ${i?.author}; SOTF Mods obsługuje tylko API, z którym się komunikuje. Kelvin i Sons of the Forest należą do Endnight Games; to projekt fanowski.`)
};

const pt_content_kelvin_credit = /** @type {(inputs: Content_Kelvin_CreditInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`O KelvinSeek é criado e mantido por ${i?.author}; o SOTF Mods só hospeda a API com que ele conversa. Kelvin e Sons of the Forest pertencem à Endnight Games; este é um projeto de fãs.`)
};

const ru_content_kelvin_credit = /** @type {(inputs: Content_Kelvin_CreditInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`KelvinSeek создаёт и поддерживает ${i?.author}; SOTF Mods только размещает API, с которым он общается. Кельвин и Sons of the Forest принадлежат Endnight Games; это фанатский проект.`)
};

const sv_content_kelvin_credit = /** @type {(inputs: Content_Kelvin_CreditInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`KelvinSeek skapas och underhålls av ${i?.author}; SOTF Mods kör bara API:t som den pratar med. Kelvin och Sons of the Forest tillhör Endnight Games; det här är ett fanprojekt.`)
};

const tr_content_kelvin_credit = /** @type {(inputs: Content_Kelvin_CreditInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`KelvinSeek’i ${i?.author} geliştirir ve sürdürür; SOTF Mods yalnızca konuştuğu API’yi barındırır. Kelvin ve Sons of the Forest, Endnight Games’e aittir; bu bir hayran projesidir.`)
};

const zh_content_kelvin_credit = /** @type {(inputs: Content_Kelvin_CreditInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`KelvinSeek 由 ${i?.author} 制作和维护；SOTF Mods 只运行它所调用的 API。Kelvin 和 Sons of the Forest 属于 Endnight Games；这是一个粉丝项目。`)
};

const ja_content_kelvin_credit = /** @type {(inputs: Content_Kelvin_CreditInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`KelvinSeek は ${i?.author} が制作・保守しています。SOTF Mods は通信先の API を運用しているだけです。ケルヴィンと Sons of the Forest は Endnight Games に帰属します。これはファンプロジェクトです。`)
};

/**
* | output |
* | --- |
* | "KelvinSeek is made and maintained by {author}; SOTF Mods only runs the API it talks to. Kelvin and Sons of the Forest belong to Endnight Games; this is a fan..." |
*
* @param {Content_Kelvin_CreditInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_kelvin_credit = /** @type {((inputs: Content_Kelvin_CreditInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_CreditInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_kelvin_credit(inputs)
	if (locale === "de") return de_content_kelvin_credit(inputs)
	if (locale === "fr") return fr_content_kelvin_credit(inputs)
	if (locale === "it") return it_content_kelvin_credit(inputs)
	if (locale === "nl") return nl_content_kelvin_credit(inputs)
	if (locale === "pl") return pl_content_kelvin_credit(inputs)
	if (locale === "pt") return pt_content_kelvin_credit(inputs)
	if (locale === "ru") return ru_content_kelvin_credit(inputs)
	if (locale === "sv") return sv_content_kelvin_credit(inputs)
	if (locale === "tr") return tr_content_kelvin_credit(inputs)
	if (locale === "zh") return zh_content_kelvin_credit(inputs)
	if (locale === "ja") return ja_content_kelvin_credit(inputs)
	return en_content_kelvin_credit(inputs)
});
