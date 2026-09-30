/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Profile_Activity_Count_CommentsInputs */

const en_profile_activity_count_comments = /** @type {(inputs: Profile_Activity_Count_CommentsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} comment`);
	return /** @type {LocalizedString} */ (`${count__number} comments`)
	
};

const es_profile_activity_count_comments = /** @type {(inputs: Profile_Activity_Count_CommentsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} comentario`);
	return /** @type {LocalizedString} */ (`${count__number} comentarios`)
	
};

const de_profile_activity_count_comments = /** @type {(inputs: Profile_Activity_Count_CommentsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Kommentar`);
	return /** @type {LocalizedString} */ (`${count__number} Kommentare`)
	
};

const fr_profile_activity_count_comments = /** @type {(inputs: Profile_Activity_Count_CommentsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} commentaire`);
	return /** @type {LocalizedString} */ (`${count__number} commentaires`)
	
};

const it_profile_activity_count_comments = /** @type {(inputs: Profile_Activity_Count_CommentsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} commento`);
	return /** @type {LocalizedString} */ (`${count__number} commenti`)
	
};

const nl_profile_activity_count_comments = /** @type {(inputs: Profile_Activity_Count_CommentsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} reactie`);
	return /** @type {LocalizedString} */ (`${count__number} reacties`)
	
};

const pl_profile_activity_count_comments = /** @type {(inputs: Profile_Activity_Count_CommentsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} komentarz`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} komentarze`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} komentarzy`);
	return /** @type {LocalizedString} */ (`${count__number} komentarza`)
	
};

const pt_profile_activity_count_comments = /** @type {(inputs: Profile_Activity_Count_CommentsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} comentário`);
	return /** @type {LocalizedString} */ (`${count__number} comentários`)
	
};

const ru_profile_activity_count_comments = /** @type {(inputs: Profile_Activity_Count_CommentsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} комментарий`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} комментария`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} комментариев`);
	return /** @type {LocalizedString} */ (`${count__number} комментария`)
	
};

const sv_profile_activity_count_comments = /** @type {(inputs: Profile_Activity_Count_CommentsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} kommentar`);
	return /** @type {LocalizedString} */ (`${count__number} kommentarer`)
	
};

const tr_profile_activity_count_comments = /** @type {(inputs: Profile_Activity_Count_CommentsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} yorum`);
	return /** @type {LocalizedString} */ (`${count__number} yorum`)
	
};

const zh_profile_activity_count_comments = /** @type {(inputs: Profile_Activity_Count_CommentsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 条评论`)
};

const ja_profile_activity_count_comments = /** @type {(inputs: Profile_Activity_Count_CommentsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`コメント ${count__number} 件`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} comment" |
* | * | "{count__number} comments" |
*
* @param {Profile_Activity_Count_CommentsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_activity_count_comments = /** @type {((inputs: Profile_Activity_Count_CommentsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Activity_Count_CommentsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_activity_count_comments(inputs)
	if (locale === "de") return de_profile_activity_count_comments(inputs)
	if (locale === "fr") return fr_profile_activity_count_comments(inputs)
	if (locale === "it") return it_profile_activity_count_comments(inputs)
	if (locale === "nl") return nl_profile_activity_count_comments(inputs)
	if (locale === "pl") return pl_profile_activity_count_comments(inputs)
	if (locale === "pt") return pt_profile_activity_count_comments(inputs)
	if (locale === "ru") return ru_profile_activity_count_comments(inputs)
	if (locale === "sv") return sv_profile_activity_count_comments(inputs)
	if (locale === "tr") return tr_profile_activity_count_comments(inputs)
	if (locale === "zh") return zh_profile_activity_count_comments(inputs)
	if (locale === "ja") return ja_profile_activity_count_comments(inputs)
	return en_profile_activity_count_comments(inputs)
});
