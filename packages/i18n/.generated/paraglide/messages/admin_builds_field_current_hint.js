/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Field_Current_HintInputs */

const en_admin_builds_field_current_hint = /** @type {(inputs: Admin_Builds_Field_Current_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The build players are on now. Marking this one unmarks the previous one.`)
};

const es_admin_builds_field_current_hint = /** @type {(inputs: Admin_Builds_Field_Current_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La build que usan ahora los jugadores. Al marcar esta se desmarca la anterior.`)
};

const de_admin_builds_field_current_hint = /** @type {(inputs: Admin_Builds_Field_Current_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Build, den die Spieler jetzt nutzen. Markierst du diesen, verliert der vorherige die Markierung.`)
};

const fr_admin_builds_field_current_hint = /** @type {(inputs: Admin_Builds_Field_Current_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le build utilisé en ce moment par les joueurs. Marquer celui-ci démarque le précédent.`)
};

const it_admin_builds_field_current_hint = /** @type {(inputs: Admin_Builds_Field_Current_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La build che i giocatori usano adesso. Segnando questa si toglie il segno alla precedente.`)
};

const nl_admin_builds_field_current_hint = /** @type {(inputs: Admin_Builds_Field_Current_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De build die spelers nu gebruiken. Deze markeren haalt de markering van de vorige weg.`)
};

const pl_admin_builds_field_current_hint = /** @type {(inputs: Admin_Builds_Field_Current_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build, na którym gracze są teraz. Oznaczenie tego zdejmuje oznaczenie z poprzedniego.`)
};

const pt_admin_builds_field_current_hint = /** @type {(inputs: Admin_Builds_Field_Current_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O build que os jogadores usam agora. Marcar este desmarca o anterior.`)
};

const ru_admin_builds_field_current_hint = /** @type {(inputs: Admin_Builds_Field_Current_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сборка, на которой сейчас играют. Если отметить эту, с предыдущей отметка снимется.`)
};

const sv_admin_builds_field_current_hint = /** @type {(inputs: Admin_Builds_Field_Current_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bygget spelarna kör nu. Markerar du det här avmarkeras det förra.`)
};

const tr_admin_builds_field_current_hint = /** @type {(inputs: Admin_Builds_Field_Current_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyuncuların şu anda kullandığı sürüm. Bunu işaretlemek öncekinin işaretini kaldırır.`)
};

const zh_admin_builds_field_current_hint = /** @type {(inputs: Admin_Builds_Field_Current_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`玩家现在所用的版本。标记它会取消上一个版本的标记。`)
};

const ja_admin_builds_field_current_hint = /** @type {(inputs: Admin_Builds_Field_Current_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プレイヤーが今使っているビルドです。これを選ぶと前のビルドの選択が外れます。`)
};

/**
* | output |
* | --- |
* | "The build players are on now. Marking this one unmarks the previous one." |
*
* @param {Admin_Builds_Field_Current_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_field_current_hint = /** @type {((inputs?: Admin_Builds_Field_Current_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Field_Current_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_field_current_hint(inputs)
	if (locale === "de") return de_admin_builds_field_current_hint(inputs)
	if (locale === "fr") return fr_admin_builds_field_current_hint(inputs)
	if (locale === "it") return it_admin_builds_field_current_hint(inputs)
	if (locale === "nl") return nl_admin_builds_field_current_hint(inputs)
	if (locale === "pl") return pl_admin_builds_field_current_hint(inputs)
	if (locale === "pt") return pt_admin_builds_field_current_hint(inputs)
	if (locale === "ru") return ru_admin_builds_field_current_hint(inputs)
	if (locale === "sv") return sv_admin_builds_field_current_hint(inputs)
	if (locale === "tr") return tr_admin_builds_field_current_hint(inputs)
	if (locale === "zh") return zh_admin_builds_field_current_hint(inputs)
	if (locale === "ja") return ja_admin_builds_field_current_hint(inputs)
	return en_admin_builds_field_current_hint(inputs)
});
