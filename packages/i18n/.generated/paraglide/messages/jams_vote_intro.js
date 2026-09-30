/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Vote_IntroInputs */

const en_jams_vote_intro = /** @type {(inputs: Jams_Vote_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Give 1 to 5 stars in each category. You can change your votes until voting closes.`)
};

const es_jams_vote_intro = /** @type {(inputs: Jams_Vote_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Da de 1 a 5 estrellas en cada categoría. Puedes cambiar tus votos hasta que cierre la votación.`)
};

const de_jams_vote_intro = /** @type {(inputs: Jams_Vote_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vergib in jeder Kategorie 1 bis 5 Sterne. Du kannst deine Stimmen ändern, bis die Abstimmung endet.`)
};

const fr_jams_vote_intro = /** @type {(inputs: Jams_Vote_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Donnez de 1 à 5 étoiles dans chaque catégorie. Vous pouvez modifier vos votes jusqu'à la clôture.`)
};

const it_jams_vote_intro = /** @type {(inputs: Jams_Vote_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assegna da 1 a 5 stelle in ogni categoria. Puoi modificare i voti fino alla chiusura della votazione.`)
};

const nl_jams_vote_intro = /** @type {(inputs: Jams_Vote_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geef in elke categorie 1 tot 5 sterren. Je kunt je stemmen wijzigen tot het stemmen sluit.`)
};

const pl_jams_vote_intro = /** @type {(inputs: Jams_Vote_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przyznaj od 1 do 5 gwiazdek w każdej kategorii. Możesz zmienić głosy do końca głosowania.`)
};

const pt_jams_vote_intro = /** @type {(inputs: Jams_Vote_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dê de 1 a 5 estrelas em cada categoria. Você pode alterar seus votos até o fim da votação.`)
};

const ru_jams_vote_intro = /** @type {(inputs: Jams_Vote_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поставьте от 1 до 5 звёзд в каждой категории. Голоса можно менять до конца голосования.`)
};

const sv_jams_vote_intro = /** @type {(inputs: Jams_Vote_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ge 1 till 5 stjärnor i varje kategori. Du kan ändra dina röster tills röstningen stänger.`)
};

const tr_jams_vote_intro = /** @type {(inputs: Jams_Vote_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Her kategoride 1 ile 5 yıldız verin. Oylama kapanana kadar oylarınızı değiştirebilirsiniz.`)
};

const zh_jams_vote_intro = /** @type {(inputs: Jams_Vote_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每个类别打 1 到 5 星。投票截止前可以修改。`)
};

const ja_jams_vote_intro = /** @type {(inputs: Jams_Vote_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カテゴリごとに1〜5つ星で評価してください。投票締め切りまで変更できます。`)
};

/**
* | output |
* | --- |
* | "Give 1 to 5 stars in each category. You can change your votes until voting closes." |
*
* @param {Jams_Vote_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_vote_intro = /** @type {((inputs?: Jams_Vote_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Vote_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_vote_intro(inputs)
	if (locale === "de") return de_jams_vote_intro(inputs)
	if (locale === "fr") return fr_jams_vote_intro(inputs)
	if (locale === "it") return it_jams_vote_intro(inputs)
	if (locale === "nl") return nl_jams_vote_intro(inputs)
	if (locale === "pl") return pl_jams_vote_intro(inputs)
	if (locale === "pt") return pt_jams_vote_intro(inputs)
	if (locale === "ru") return ru_jams_vote_intro(inputs)
	if (locale === "sv") return sv_jams_vote_intro(inputs)
	if (locale === "tr") return tr_jams_vote_intro(inputs)
	if (locale === "zh") return zh_jams_vote_intro(inputs)
	if (locale === "ja") return ja_jams_vote_intro(inputs)
	return en_jams_vote_intro(inputs)
});
