/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Description_EmptyInputs */

const en_builds_description_empty = /** @type {(inputs: Builds_Description_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The builder hasn’t written a description yet. The spec sheet has the facts.`)
};

const es_builds_description_empty = /** @type {(inputs: Builds_Description_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El constructor aún no ha escrito una descripción. La ficha técnica tiene los datos.`)
};

const de_builds_description_empty = /** @type {(inputs: Builds_Description_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Erbauer hat noch keine Beschreibung geschrieben. Das Datenblatt enthält die Fakten.`)
};

const fr_builds_description_empty = /** @type {(inputs: Builds_Description_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le bâtisseur n’a pas encore écrit de description. La fiche technique contient les faits.`)
};

const it_builds_description_empty = /** @type {(inputs: Builds_Description_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il costruttore non ha ancora scritto una descrizione. La scheda tecnica riporta i dati.`)
};

const nl_builds_description_empty = /** @type {(inputs: Builds_Description_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De bouwer heeft nog geen beschrijving geschreven. De specificaties bevatten de feiten.`)
};

const pl_builds_description_empty = /** @type {(inputs: Builds_Description_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Budowniczy nie napisał jeszcze opisu. Karta techniczna zawiera fakty.`)
};

const pt_builds_description_empty = /** @type {(inputs: Builds_Description_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O construtor ainda não escreveu uma descrição. A ficha técnica traz os dados.`)
};

const ru_builds_description_empty = /** @type {(inputs: Builds_Description_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Строитель ещё не написал описание. Все факты — в техническом паспорте.`)
};

const sv_builds_description_empty = /** @type {(inputs: Builds_Description_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Byggaren har inte skrivit någon beskrivning än. Databladet har fakta.`)
};

const tr_builds_description_empty = /** @type {(inputs: Builds_Description_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapımcı henüz bir açıklama yazmadı. Teknik sayfada bilgiler var.`)
};

const zh_builds_description_empty = /** @type {(inputs: Builds_Description_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建造者还没有写描述。技术参数里有相关信息。`)
};

const ja_builds_description_empty = /** @type {(inputs: Builds_Description_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建築者はまだ説明を書いていません。仕様書で詳細を確認できます。`)
};

/**
* | output |
* | --- |
* | "The builder hasn’t written a description yet. The spec sheet has the facts." |
*
* @param {Builds_Description_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_description_empty = /** @type {((inputs?: Builds_Description_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Description_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_description_empty(inputs)
	if (locale === "de") return de_builds_description_empty(inputs)
	if (locale === "fr") return fr_builds_description_empty(inputs)
	if (locale === "it") return it_builds_description_empty(inputs)
	if (locale === "nl") return nl_builds_description_empty(inputs)
	if (locale === "pl") return pl_builds_description_empty(inputs)
	if (locale === "pt") return pt_builds_description_empty(inputs)
	if (locale === "ru") return ru_builds_description_empty(inputs)
	if (locale === "sv") return sv_builds_description_empty(inputs)
	if (locale === "tr") return tr_builds_description_empty(inputs)
	if (locale === "zh") return zh_builds_description_empty(inputs)
	if (locale === "ja") return ja_builds_description_empty(inputs)
	return en_builds_description_empty(inputs)
});
