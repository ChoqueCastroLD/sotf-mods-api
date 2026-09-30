/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Hidden_By_RangerInputs */

const en_ui_domain_hidden_by_ranger = /** @type {(inputs: Ui_Domain_Hidden_By_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hidden by a ranger. Only you and the rangers can see it.`)
};

const es_ui_domain_hidden_by_ranger = /** @type {(inputs: Ui_Domain_Hidden_By_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oculto por un guardabosques. Solo tú y los guardabosques podéis verlo.`)
};

const de_ui_domain_hidden_by_ranger = /** @type {(inputs: Ui_Domain_Hidden_By_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Von einem Ranger ausgeblendet. Nur du und die Ranger können es sehen.`)
};

const fr_ui_domain_hidden_by_ranger = /** @type {(inputs: Ui_Domain_Hidden_By_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Masqué par un ranger. Seuls vous et les rangers pouvez le voir.`)
};

const it_ui_domain_hidden_by_ranger = /** @type {(inputs: Ui_Domain_Hidden_By_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nascosto da un ranger. Solo tu e i ranger potete vederlo.`)
};

const nl_ui_domain_hidden_by_ranger = /** @type {(inputs: Ui_Domain_Hidden_By_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verborgen door een ranger. Alleen jij en de rangers kunnen het zien.`)
};

const pl_ui_domain_hidden_by_ranger = /** @type {(inputs: Ui_Domain_Hidden_By_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ukryte przez strażnika. Widzisz to tylko ty i strażnicy.`)
};

const pt_ui_domain_hidden_by_ranger = /** @type {(inputs: Ui_Domain_Hidden_By_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocultado por um guarda. Só você e os guardas podem ver.`)
};

const ru_ui_domain_hidden_by_ranger = /** @type {(inputs: Ui_Domain_Hidden_By_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скрыто рейнджером. Видите только вы и рейнджеры.`)
};

const sv_ui_domain_hidden_by_ranger = /** @type {(inputs: Ui_Domain_Hidden_By_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dold av en ranger. Bara du och rangers kan se det.`)
};

const tr_ui_domain_hidden_by_ranger = /** @type {(inputs: Ui_Domain_Hidden_By_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir korucu tarafından gizlendi. Yalnızca sen ve korucular görebilirsiniz.`)
};

const zh_ui_domain_hidden_by_ranger = /** @type {(inputs: Ui_Domain_Hidden_By_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已被护林员隐藏。只有你和护林员能看到。`)
};

const ja_ui_domain_hidden_by_ranger = /** @type {(inputs: Ui_Domain_Hidden_By_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レンジャーにより非表示になりました。あなたとレンジャーだけが見られます。`)
};

/**
* | output |
* | --- |
* | "Hidden by a ranger. Only you and the rangers can see it." |
*
* @param {Ui_Domain_Hidden_By_RangerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_hidden_by_ranger = /** @type {((inputs?: Ui_Domain_Hidden_By_RangerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Hidden_By_RangerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_hidden_by_ranger(inputs)
	if (locale === "de") return de_ui_domain_hidden_by_ranger(inputs)
	if (locale === "fr") return fr_ui_domain_hidden_by_ranger(inputs)
	if (locale === "it") return it_ui_domain_hidden_by_ranger(inputs)
	if (locale === "nl") return nl_ui_domain_hidden_by_ranger(inputs)
	if (locale === "pl") return pl_ui_domain_hidden_by_ranger(inputs)
	if (locale === "pt") return pt_ui_domain_hidden_by_ranger(inputs)
	if (locale === "ru") return ru_ui_domain_hidden_by_ranger(inputs)
	if (locale === "sv") return sv_ui_domain_hidden_by_ranger(inputs)
	if (locale === "tr") return tr_ui_domain_hidden_by_ranger(inputs)
	if (locale === "zh") return zh_ui_domain_hidden_by_ranger(inputs)
	if (locale === "ja") return ja_ui_domain_hidden_by_ranger(inputs)
	return en_ui_domain_hidden_by_ranger(inputs)
});
