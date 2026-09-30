/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, mod: NonNullable<unknown> }} Signals_Comment_On_Mod_GroupedInputs */

const en_signals_comment_on_mod_grouped = /** @type {(inputs: Signals_Comment_On_Mod_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} new comment on ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} new comments on ${i?.mod}`)
	
};

const es_signals_comment_on_mod_grouped = /** @type {(inputs: Signals_Comment_On_Mod_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} comentario nuevo en ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} comentarios nuevos en ${i?.mod}`)
	
};

const de_signals_comment_on_mod_grouped = /** @type {(inputs: Signals_Comment_On_Mod_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} neuer Kommentar zu ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} neue Kommentare zu ${i?.mod}`)
	
};

const fr_signals_comment_on_mod_grouped = /** @type {(inputs: Signals_Comment_On_Mod_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nouveau commentaire sur ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} nouveaux commentaires sur ${i?.mod}`)
	
};

const it_signals_comment_on_mod_grouped = /** @type {(inputs: Signals_Comment_On_Mod_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nuovo commento su ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} nuovi commenti su ${i?.mod}`)
	
};

const nl_signals_comment_on_mod_grouped = /** @type {(inputs: Signals_Comment_On_Mod_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nieuwe reactie op ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} nieuwe reacties op ${i?.mod}`)
	
};

const pl_signals_comment_on_mod_grouped = /** @type {(inputs: Signals_Comment_On_Mod_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nowy komentarz do ${i?.mod}`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} nowe komentarze do ${i?.mod}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} nowych komentarzy do ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} nowego komentarza do ${i?.mod}`)
	
};

const pt_signals_comment_on_mod_grouped = /** @type {(inputs: Signals_Comment_On_Mod_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} novo comentário em ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} novos comentários em ${i?.mod}`)
	
};

const ru_signals_comment_on_mod_grouped = /** @type {(inputs: Signals_Comment_On_Mod_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} новый комментарий к ${i?.mod}`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} новых комментария к ${i?.mod}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} новых комментариев к ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} нового комментария к ${i?.mod}`)
	
};

const sv_signals_comment_on_mod_grouped = /** @type {(inputs: Signals_Comment_On_Mod_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} ny kommentar på ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} nya kommentarer på ${i?.mod}`)
	
};

const tr_signals_comment_on_mod_grouped = /** @type {(inputs: Signals_Comment_On_Mod_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.mod} için ${count__number} yeni yorum`);
	return /** @type {LocalizedString} */ (`${i?.mod} için ${count__number} yeni yorum`)
	
};

const zh_signals_comment_on_mod_grouped = /** @type {(inputs: Signals_Comment_On_Mod_GroupedInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${i?.mod} 有 ${count__number} 条新评论`)
};

const ja_signals_comment_on_mod_grouped = /** @type {(inputs: Signals_Comment_On_Mod_GroupedInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${i?.mod} に新しいコメント ${count__number} 件`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} new comment on {mod}" |
* | * | "{count__number} new comments on {mod}" |
*
* @param {Signals_Comment_On_Mod_GroupedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_comment_on_mod_grouped = /** @type {((inputs: Signals_Comment_On_Mod_GroupedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Comment_On_Mod_GroupedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_comment_on_mod_grouped(inputs)
	if (locale === "de") return de_signals_comment_on_mod_grouped(inputs)
	if (locale === "fr") return fr_signals_comment_on_mod_grouped(inputs)
	if (locale === "it") return it_signals_comment_on_mod_grouped(inputs)
	if (locale === "nl") return nl_signals_comment_on_mod_grouped(inputs)
	if (locale === "pl") return pl_signals_comment_on_mod_grouped(inputs)
	if (locale === "pt") return pt_signals_comment_on_mod_grouped(inputs)
	if (locale === "ru") return ru_signals_comment_on_mod_grouped(inputs)
	if (locale === "sv") return sv_signals_comment_on_mod_grouped(inputs)
	if (locale === "tr") return tr_signals_comment_on_mod_grouped(inputs)
	if (locale === "zh") return zh_signals_comment_on_mod_grouped(inputs)
	if (locale === "ja") return ja_signals_comment_on_mod_grouped(inputs)
	return en_signals_comment_on_mod_grouped(inputs)
});
