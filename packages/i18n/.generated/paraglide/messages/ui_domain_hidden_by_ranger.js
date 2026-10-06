/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Hidden_By_RangerInputs */

const en_ui_domain_hidden_by_ranger = /** @type {(inputs: Ui_Domain_Hidden_By_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hidden by a moderator. Only you and moderators can see it.`)
};

const es_ui_domain_hidden_by_ranger = /** @type {(inputs: Ui_Domain_Hidden_By_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oculto por un moderador. Solo tú y los moderadores podéis verlo.`)
};

const de_ui_domain_hidden_by_ranger = /** @type {(inputs: Ui_Domain_Hidden_By_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Von einem Moderator ausgeblendet. Nur du und die Moderatoren können es sehen.`)
};

const fr_ui_domain_hidden_by_ranger = /** @type {(inputs: Ui_Domain_Hidden_By_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Masqué par un modérateur. Seuls vous et les modérateurs pouvez le voir.`)
};

const it_ui_domain_hidden_by_ranger = /** @type {(inputs: Ui_Domain_Hidden_By_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nascosto da un moderatore. Solo tu e i moderatori potete vederlo.`)
};

const nl_ui_domain_hidden_by_ranger = /** @type {(inputs: Ui_Domain_Hidden_By_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verborgen door een moderator. Alleen jij en de moderators kunnen het zien.`)
};

const pl_ui_domain_hidden_by_ranger = /** @type {(inputs: Ui_Domain_Hidden_By_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ukryte przez moderatora. Widzisz to tylko ty i moderatorzy.`)
};

const pt_ui_domain_hidden_by_ranger = /** @type {(inputs: Ui_Domain_Hidden_By_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocultado por um moderador. Só você e os moderadores podem ver.`)
};

const ru_ui_domain_hidden_by_ranger = /** @type {(inputs: Ui_Domain_Hidden_By_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скрыто модератором. Видите только вы и модераторы.`)
};

const sv_ui_domain_hidden_by_ranger = /** @type {(inputs: Ui_Domain_Hidden_By_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dold av en moderator. Bara du och moderatorer kan se det.`)
};

const tr_ui_domain_hidden_by_ranger = /** @type {(inputs: Ui_Domain_Hidden_By_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir moderatör tarafından gizlendi. Yalnızca sen ve moderatörler görebilirsiniz.`)
};

const zh_ui_domain_hidden_by_ranger = /** @type {(inputs: Ui_Domain_Hidden_By_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已被审核员隐藏。只有你和审核员能看到。`)
};

const ja_ui_domain_hidden_by_ranger = /** @type {(inputs: Ui_Domain_Hidden_By_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`モデレーターにより非表示になりました。あなたとモデレーターだけが見られます。`)
};

/**
* | output |
* | --- |
* | "Hidden by a moderator. Only you and moderators can see it." |
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
