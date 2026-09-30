/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Banner_Unlisted_TextInputs */

const en_builds_banner_unlisted_text = /** @type {(inputs: Builds_Banner_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This build is hidden from listings and search. Anyone with the link can still open it.`)
};

const es_builds_banner_unlisted_text = /** @type {(inputs: Builds_Banner_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta build no aparece en listados ni búsquedas. Cualquiera con el enlace puede abrirla.`)
};

const de_builds_banner_unlisted_text = /** @type {(inputs: Builds_Banner_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Build erscheint nicht in Listen und in der Suche. Wer den Link hat, kann ihn trotzdem öffnen.`)
};

const fr_builds_banner_unlisted_text = /** @type {(inputs: Builds_Banner_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cette build n’apparaît ni dans les listes ni dans la recherche. Toute personne ayant le lien peut l’ouvrir.`)
};

const it_builds_banner_unlisted_text = /** @type {(inputs: Builds_Banner_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa build non compare negli elenchi né nella ricerca. Chi ha il link può comunque aprirla.`)
};

const nl_builds_banner_unlisted_text = /** @type {(inputs: Builds_Banner_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze build staat niet in overzichten en zoekresultaten. Iedereen met de link kan hem wel openen.`)
};

const pl_builds_banner_unlisted_text = /** @type {(inputs: Builds_Banner_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten build nie pojawia się na listach ani w wyszukiwarce. Każdy, kto ma link, nadal może go otworzyć.`)
};

const pt_builds_banner_unlisted_text = /** @type {(inputs: Builds_Banner_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta build não aparece em listas nem na busca. Quem tiver o link ainda pode abri-la.`)
};

const ru_builds_banner_unlisted_text = /** @type {(inputs: Builds_Banner_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этой постройки нет в списках и в поиске. Открыть её может любой, у кого есть ссылка.`)
};

const sv_builds_banner_unlisted_text = /** @type {(inputs: Builds_Banner_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bygget syns inte i listor och sökningar. Alla med länken kan ändå öppna det.`)
};

const tr_builds_banner_unlisted_text = /** @type {(inputs: Builds_Banner_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu yapı listelerde ve aramada görünmez. Bağlantıya sahip olan herkes yine de açabilir.`)
};

const zh_builds_banner_unlisted_text = /** @type {(inputs: Builds_Banner_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此建筑不会出现在列表和搜索中。拥有链接的人仍可打开。`)
};

const ja_builds_banner_unlisted_text = /** @type {(inputs: Builds_Banner_Unlisted_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この建築は一覧や検索に表示されません。リンクを知っている人は開けます。`)
};

/**
* | output |
* | --- |
* | "This build is hidden from listings and search. Anyone with the link can still open it." |
*
* @param {Builds_Banner_Unlisted_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_banner_unlisted_text = /** @type {((inputs?: Builds_Banner_Unlisted_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Banner_Unlisted_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_banner_unlisted_text(inputs)
	if (locale === "de") return de_builds_banner_unlisted_text(inputs)
	if (locale === "fr") return fr_builds_banner_unlisted_text(inputs)
	if (locale === "it") return it_builds_banner_unlisted_text(inputs)
	if (locale === "nl") return nl_builds_banner_unlisted_text(inputs)
	if (locale === "pl") return pl_builds_banner_unlisted_text(inputs)
	if (locale === "pt") return pt_builds_banner_unlisted_text(inputs)
	if (locale === "ru") return ru_builds_banner_unlisted_text(inputs)
	if (locale === "sv") return sv_builds_banner_unlisted_text(inputs)
	if (locale === "tr") return tr_builds_banner_unlisted_text(inputs)
	if (locale === "zh") return zh_builds_banner_unlisted_text(inputs)
	if (locale === "ja") return ja_builds_banner_unlisted_text(inputs)
	return en_builds_banner_unlisted_text(inputs)
});
