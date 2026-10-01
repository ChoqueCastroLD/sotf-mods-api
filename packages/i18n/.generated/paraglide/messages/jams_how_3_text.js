/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_How_3_TextInputs */

const en_jams_how_3_text = /** @type {(inputs: Jams_How_3_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verified members rate every entry from 1 to 5 stars in each category.`)
};

const es_jams_how_3_text = /** @type {(inputs: Jams_How_3_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los miembros verificados valoran cada participación de 1 a 5 estrellas en cada categoría.`)
};

const de_jams_how_3_text = /** @type {(inputs: Jams_How_3_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifizierte Mitglieder bewerten jeden Beitrag in jeder Kategorie mit 1 bis 5 Sternen.`)
};

const fr_jams_how_3_text = /** @type {(inputs: Jams_How_3_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les membres vérifiés notent chaque participation de 1 à 5 étoiles dans chaque catégorie.`)
};

const it_jams_how_3_text = /** @type {(inputs: Jams_How_3_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I membri verificati valutano ogni iscrizione da 1 a 5 stelle in ogni categoria.`)
};

const nl_jams_how_3_text = /** @type {(inputs: Jams_How_3_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geverifieerde leden beoordelen elke inzending met 1 tot 5 sterren per categorie.`)
};

const pl_jams_how_3_text = /** @type {(inputs: Jams_How_3_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zweryfikowani członkowie oceniają każde zgłoszenie od 1 do 5 gwiazdek w każdej kategorii.`)
};

const pt_jams_how_3_text = /** @type {(inputs: Jams_How_3_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Membros verificados avaliam cada inscrição de 1 a 5 estrelas em cada categoria.`)
};

const ru_jams_how_3_text = /** @type {(inputs: Jams_How_3_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подтверждённые участники оценивают каждую работу от 1 до 5 звёзд в каждой категории.`)
};

const sv_jams_how_3_text = /** @type {(inputs: Jams_How_3_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifierade medlemmar betygsätter varje bidrag med 1 till 5 stjärnor i varje kategori.`)
};

const tr_jams_how_3_text = /** @type {(inputs: Jams_How_3_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Doğrulanmış üyeler her başvuruyu her kategoride 1 ile 5 yıldız arasında puanlar.`)
};

const zh_jams_how_3_text = /** @type {(inputs: Jams_How_3_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已验证的成员在每个类别中为每件作品打 1 到 5 星。`)
};

const ja_jams_how_3_text = /** @type {(inputs: Jams_How_3_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`認証済みメンバーが、各カテゴリーで作品を 1〜5 つ星で評価します。`)
};

/**
* | output |
* | --- |
* | "Verified members rate every entry from 1 to 5 stars in each category." |
*
* @param {Jams_How_3_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_how_3_text = /** @type {((inputs?: Jams_How_3_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_How_3_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_how_3_text(inputs)
	if (locale === "de") return de_jams_how_3_text(inputs)
	if (locale === "fr") return fr_jams_how_3_text(inputs)
	if (locale === "it") return it_jams_how_3_text(inputs)
	if (locale === "nl") return nl_jams_how_3_text(inputs)
	if (locale === "pl") return pl_jams_how_3_text(inputs)
	if (locale === "pt") return pt_jams_how_3_text(inputs)
	if (locale === "ru") return ru_jams_how_3_text(inputs)
	if (locale === "sv") return sv_jams_how_3_text(inputs)
	if (locale === "tr") return tr_jams_how_3_text(inputs)
	if (locale === "zh") return zh_jams_how_3_text(inputs)
	if (locale === "ja") return ja_jams_how_3_text(inputs)
	return en_jams_how_3_text(inputs)
});
